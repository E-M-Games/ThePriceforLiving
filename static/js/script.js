const statsOrder = ["Forza", "Agilità", "Tenacia", "Destrezza manuale", "Risolutezza", "Conoscenza"];

function popolaMenuTalenti() {
    const select1 = document.getElementById('talento1-select');
    const select2 = document.getElementById('talento2-select');
    
    // TALENTI viene da data.js
    if(typeof TALENTI !== 'undefined') {
        const nomiTalenti = Object.keys(TALENTI).filter(nome => nome !== "Nessuno");
        nomiTalenti.forEach(nome => {
            select1.add(new Option(nome, nome));
            select2.add(new Option(nome, nome));
        });
    } else {
        console.error("Errore: data.js non caricato correttamente.");
    }
}

function calculateStats(t1_name, t2_name) {
    const t1 = TALENTI[t1_name] || TALENTI["Nessuno"];
    const t2 = TALENTI[t2_name] || TALENTI["Nessuno"];

    const stats_keys = ["Forza", "Agilità", "Tenacia", "Destrezza manuale", "Risolutezza", "Conoscenza"];
    let stats_result = {};

    stats_keys.forEach(stat => {
        const v1 = t1.stats[stat] || 0;
        const v2 = t2.stats[stat] || 0;
        
        stats_result[stat] = {
            t1: v1,
            t2: v2,
            totale_base: v1 + v2,
            malus: 0,
            totale_finale: v1 + v2
        };
    });

    const armi_unite = [...new Set([...t1.armi, ...t2.armi])];
    const abilita_unite = [...new Set([...t1.abilita_uniche, ...t2.abilita_uniche])];

    return {
        stats: stats_result,
        armi: armi_unite,
        abilita_uniche: abilita_unite,
        capacita1: t1.capacita,
        capacita2: t2.capacita
    };
}

function updateSheet() {
    const t1 = document.getElementById('talento1-select').value;
    const t2 = document.getElementById('talento2-select').value;

    if (t1 === t2 && t1 !== "Nessuno") {
        alert("I talenti devono essere diversi!");
        document.getElementById('talento2-select').value = "Nessuno";
        return updateSheet();
    }

    const data = calculateStats(t1, t2);

    applyComplexMalus(data.stats);
    renderStats(data.stats);

    document.querySelectorAll('input[id^="wp-"]').forEach(cb => {
        cb.checked = data.armi.includes(cb.id.replace('wp-', ''));
    });

    document.querySelectorAll('input[id^="sk-"]').forEach(cb => {
        cb.checked = data.abilita_uniche.includes(cb.id.replace('sk-', ''));
    });

    document.querySelectorAll('.bonus-cell').forEach(cell => {
        const statRequired = cell.getAttribute('data-stat');
        if (statRequired && data.stats[statRequired]) {
            let totalStat = data.stats[statRequired].totale_finale;
            if (cell.classList.contains('sk-uniq')) {
                const skCheckbox = cell.previousElementSibling.querySelector('input');
                if (!skCheckbox.checked) { cell.innerHTML = "-"; return; }
            }
            cell.innerHTML = totalStat > 0 ? `+${totalStat}` : totalStat;
        }
    });

    document.getElementById('cap-list-1').innerHTML = data.capacita1.map(c => `<li>${c}</li>`).join('');
    document.getElementById('cap-list-2').innerHTML = data.capacita2.map(c => `<li>${c}</li>`).join('');
}

function saveInventory() {
    const weaponsArray = [];
    document.querySelectorAll('.weapon-row').forEach(row => {
        weaponsArray.push({
            weapon: row.querySelector('.inv-weapon-input').value,
            ammo: row.querySelector('.inv-ammo-input').value
        });
    });

    const currentStatus = {
        ferito: document.getElementById('st-ferito').checked,
        sanguinante: document.getElementById('st-sanguinante').value,
        moribondo: document.getElementById('st-moribondo').checked,
        stanco: document.getElementById('st-stanco').checked,
        disorientato: document.getElementById('st-disorientato').checked,
        spaventato: document.getElementById('st-spaventato').checked,
        febbre: document.getElementById('st-febbre').checked,
        polmonite: document.getElementById('st-polmonite').checked,
        vomito: document.getElementById('st-vomito').checked,
        vIntorp: document.getElementById('st-v-intorp').value,
        vEmo: document.getElementById('st-v-emo').value,
        vImmuno: document.getElementById('st-v-immuno').value
    };

    const inventoryData = {
        name: document.getElementById('char-name').value,
        weapons: weaponsArray,
        generic: document.getElementById('inv-generic').value,
        status: currentStatus,
        talento1: document.getElementById('talento1-select').value, // SALVA TALENTO 1
        talento2: document.getElementById('talento2-select').value  // SALVA TALENTO 2
    };
    localStorage.setItem('rpg_sheet_inventory', JSON.stringify(inventoryData));
}

function loadInventory() {
    const saved = localStorage.getItem('rpg_sheet_inventory');
    const tbody = document.getElementById('inventory-weapons-body');
    tbody.innerHTML = ''; 

    if (saved) {
        const data = JSON.parse(saved);
        if (data.name) document.getElementById('char-name').value = data.name;
        if (data.generic) document.getElementById('inv-generic').value = data.generic;
        
        if (data.talento1) document.getElementById('talento1-select').value = data.talento1;
        if (data.talento2) document.getElementById('talento2-select').value = data.talento2;

        if (data.weapons && data.weapons.length > 0) {
            data.weapons.forEach(item => addWeaponSlot(item.weapon, item.ammo));
        } else {
            addWeaponSlot(); addWeaponSlot(); addWeaponSlot();
        }

        if (data.status) {
            document.getElementById('st-ferito').checked = data.status.ferito || false;
            document.getElementById('st-sanguinante').value = data.status.sanguinante || 0;
            document.getElementById('st-moribondo').checked = data.status.moribondo || false;
            document.getElementById('st-stanco').checked = data.status.stanco || false;
            document.getElementById('st-disorientato').checked = data.status.disorientato || false;
            document.getElementById('st-spaventato').checked = data.status.spaventato || false;
            document.getElementById('st-febbre').checked = data.status.febbre || false;
            document.getElementById('st-polmonite').checked = data.status.polmonite || false;
            document.getElementById('st-vomito').checked = data.status.vomito || false;
            document.getElementById('st-v-intorp').value = data.status.vIntorp || 0;
            document.getElementById('st-v-emo').value = data.status.vEmo || 0;
            document.getElementById('st-v-immuno').value = data.status.vImmuno || 0;
        }
    } else {
        addWeaponSlot(); addWeaponSlot(); addWeaponSlot();
    }
}

function rollDice() {
    const dice = document.getElementById('dice');
    const btn = document.querySelector('.roll-btn');
    btn.disabled = true; btn.style.opacity = '0.5';
    dice.classList.add('rolling');
    
    let rollInterval = setInterval(() => { dice.innerText = Math.floor(Math.random() * 6) + 1; }, 100);

    setTimeout(() => {
        clearInterval(rollInterval);
        dice.classList.remove('rolling');
        dice.innerText = Math.floor(Math.random() * 6) + 1;
        btn.disabled = false; btn.style.opacity = '1';
    }, 1000);
}

function addWeaponSlot(weaponName = '', ammoCount = '') {
    const tbody = document.getElementById('inventory-weapons-body');
    const tr = document.createElement('tr');
    tr.className = 'weapon-row';
    tr.innerHTML = `
        <td><input type="text" class="inv-weapon-input" value="${weaponName}" oninput="saveInventory()"></td>
        <td><input type="text" class="inv-ammo-input" value="${ammoCount}" oninput="saveInventory()"></td>
        <td style="text-align: center;"><button class="delete-btn" onclick="removeWeaponSlot(this)">x</button></td>
    `;
    tbody.appendChild(tr);
    saveInventory();
}

function removeWeaponSlot(btn) {
    btn.closest('tr').remove();
    saveInventory();
}

function toggleStatusPanel() {
    const panel = document.getElementById('status-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function renderStats(statsData) {
    const tbody = document.getElementById("stats-body");
    tbody.innerHTML = "";
    statsOrder.forEach(stat => {
        const data = statsData[stat] || {t1:0, t2:0, totale_base:0, malus:0, totale_finale:0};
        tbody.innerHTML += `
            <tr>
                <td><strong>${stat}</strong></td>
                <td>+${data.t1}</td>
                <td>+${data.t2}</td>
                <td>${data.totale_base}</td>
                <td style="color:red; font-weight:bold;">${data.malus > 0 ? '-' + data.malus : ''}</td>
                <td style="font-weight:bold;">${data.totale_finale}</td>
            </tr>
        `;
    });
}

function applyComplexMalus(statsData) {
    let mFo = 0, mAg = 0, mTn = 0, mDm = 0, mRs = 0, mCo = 0;

    const stFerito = document.getElementById('st-ferito').checked;
    const stSanguinante = parseInt(document.getElementById('st-sanguinante').value) || 0;
    const stMoribondo = document.getElementById('st-moribondo').checked;
    const stFebbre = document.getElementById('st-febbre').checked;
    const stPolmonite = document.getElementById('st-polmonite').checked;
    
    const vIntorp = parseInt(document.getElementById('st-v-intorp').value) || 0;
    const vEmo = parseInt(document.getElementById('st-v-emo').value) || 0;
    const vImmuno = parseInt(document.getElementById('st-v-immuno').value) || 0;

    if (stFerito) { mFo += 1; mAg += 1; }
    if (stFebbre) { mCo += 1; }
    if (stPolmonite) { mFo += 1; mAg += 1; }
    if (stMoribondo) { mFo += 2; mAg += 2; mTn += 2; mDm += 2; mRs += 2; mCo += 2; }

    mFo += stSanguinante;
    mFo += vIntorp; mAg += vIntorp;
    mAg += vEmo; mCo += vEmo;
    mTn += vImmuno;

    const applyM = (statName, malusVal) => {
        if(statsData[statName]) {
            statsData[statName].malus += malusVal;
            statsData[statName].totale_finale = statsData[statName].totale_base - statsData[statName].malus;
        }
    };

    applyM('Forza', mFo); applyM('Agilità', mAg); applyM('Tenacia', mTn);
    applyM('Destrezza manuale', mDm); applyM('Risolutezza', mRs); applyM('Conoscenza', mCo);

    let isDead = false;
    statsOrder.forEach(stat => {
        if (statsData[stat].malus >= 3) isDead = true;
    });

    document.getElementById('death-warning').style.display = isDead ? 'block' : 'none';

    let narr = [];
    if (document.getElementById('st-stanco').checked) narr.push("<b>STANCO:</b> Non può correre.");
    if (document.getElementById('st-disorientato').checked) narr.push("<b>DISORIENTATO:</b> Tira 2 volte (tieni il peggiore) su Conoscenza e Agilità.");
    if (document.getElementById('st-spaventato').checked) narr.push("<b>SPAVENTATO:</b> Fallisce automatico Risolutezza. Può solo scappare.");
    if (document.getElementById('st-vomito').checked) narr.push("<b>VOMITO:</b> Ogni azione richiede tiro su Tenacia o doversi fermare a vomitare.");
    if (stMoribondo) narr.push("<b>MORIBONDO:</b> Immobile senza aiuto. Muore in pochi minuti. (Se curato: l'indomani -1 Fo, -1 Ag, no corsa).");
    if (stSanguinante >= 3) narr.push("<b>SANGUINANTE (Stadio 3+):</b> Diventa Moribondo.");
    if (vIntorp >= 3) narr.push("<b>VEL. INTORPIDENTE (Stadio 3+):</b> Muore di degradazione muscolare.");
    if (vEmo >= 1) narr.push("<b>TOSSINA EMO.:</b> Subisce in automatico lo status Sanguinante.");
    if (vEmo >= 3) narr.push("<b>TOSSINA EMO. (Stadio 3+):</b> Al fallimento, tiro Tenacia o morte per ictus.");
    if (vImmuno >= 3) narr.push("<b>VEL. IMMUNO. (Stadio 3+):</b> Fallisce automatico prove Tenacia per resistenza fisica.");

    const narrBox = document.getElementById('narrative-warnings');
    if (narr.length > 0) {
        narrBox.style.display = 'block'; narrBox.innerHTML = narr.join('<br>');
    } else {
        narrBox.style.display = 'none';
    }

    saveInventory();
}

function showToast(messaggio) {
    var x = document.getElementById("toast");
    x.innerText = messaggio;
    x.className = "show";
    
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
    }, 2000);
}

function resetScheda() {
    if(confirm("Sei sicuro di voler resettare la scheda?")) {
        localStorage.removeItem('rpg_sheet_inventory');
        
        sessionStorage.setItem('mostraToast', 'true');
        
        location.reload();
    }
}

window.onload = function() {
    popolaMenuTalenti();
    loadInventory();
    updateSheet();

    if (sessionStorage.getItem('mostraToast') === 'true') {
        showToast("Scheda resettata!");
        sessionStorage.removeItem('mostraToast');
    }
};