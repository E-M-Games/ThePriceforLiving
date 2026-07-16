// data.js
const TALENTI = {
    "Nessuno": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 0, "Risolutezza": 0, "Conoscenza": 0},
        "armi": [], "abilita_uniche": [], "capacita": []
    },
    "Acrobata": {
        "stats": {"Forza": 0, "Agilità": 1, "Tenacia": 1, "Destrezza manuale": 0, "Risolutezza": 1, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Acrobazia", "Rialzarsi"],
        "capacita": ["Tira 2 volte il dado e tiene il risultato migliore ad ogni prova su ACROBAZIA", "Ottiene +1 ad EQUILIBRIO e SCHIVARE"]
    },
    "Archeologo": {
        "stats": {"Forza": 1, "Agilità": 0, "Tenacia": 1, "Destrezza manuale": 0, "Risolutezza": 0, "Conoscenza": 1},
        "armi": [],
        "abilita_uniche": ["Rompere", "Rialzarsi", "Decifrare"],
        "capacita": ["Ottiene +1 ad ogni prova su SCALARE", "Tira 2 volte e tiene il risultato migliore ad ogni prova su DECIFRARE", "Ottiene +1 ad ogni prova su DIVINCOLARSI e RIALZARSI"]
    },
    "Artificiere": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 1, "Conoscenza": 1},
        "armi": ["Armi da fuoco", "Pistole", "Esplosivi complessi"],
        "abilita_uniche": ["Costruire oggetti", "Decodificare", "Mira"],
        "capacita": ["Può utilizzare COSTRUIRE OGGETTI per costruire esplosivi ed ottiene +1", "Ottiene +1 ad ogni prova su DECODIFICARE per disinnescare un esplosivo", "Inizia la partita con un esplosivo a scelta"]
    },
    "Artigiano": {
        "stats": {"Forza": 1, "Agilità": 1, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Costruire oggetti", "Riparare", "Manomettere"],
        "capacita": ["Ottiene +1 a RIPARARE", "Tira 2 volte e tiene il risultato migliore ad ogni prova su COSTRUIRE OGGETTI", "Inizia la partita con una cintura degli attrezzi"]
    },
    "Arti Marziali": {
        "stats": {"Forza": 1, "Agilità": 1, "Tenacia": 0, "Destrezza manuale": 0, "Risolutezza": 1, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Rompere", "Rialzarsi", "Acrobazia"],
        "capacita": ["Ottiene +1 a RIALZARSI", "Ottiene +1 a DIVINCOLARSI", "Ottiene +1 a TENACIA per ogni prova contro la stanchezza"]
    },
    "Atleta": {
        "stats": {"Forza": 1, "Agilità": 2, "Tenacia": 0, "Destrezza manuale": 0, "Risolutezza": 0, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Rialzarsi", "Acrobazia"],
        "capacita": ["Può correre orientativamente per 2 scene di fila senza tirare su TENACIA", "Ottiene +1 ad ogni prova su AGILITÀ in corsa"]
    },
    "Avventuriero": {
        "stats": {"Forza": 1, "Agilità": 0, "Tenacia": 1, "Destrezza manuale": 0, "Risolutezza": 0, "Conoscenza": 1},
        "armi": ["Armi semplici"],
        "abilita_uniche": ["Costruire oggetti", "Mira", "Decifrare"],
        "capacita": ["Ottiene +1 ad ASCOLTARE ed OSSERVARE", "Può usare COSTRUIRE OGGETTI per costruire o riparare armi semplici ed ottiene un +1 al tiro", "Inizia la partita con un'arma semplice a scelta con 5 munizioni semplici"]
    },
    "Cacciatore": {
        "stats": {"Forza": 0, "Agilità": 1, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 0},
        "armi": ["Pistole", "Armi da fuoco"],
        "abilita_uniche": ["Costruire trappole", "Rialzarsi", "Mira"],
        "capacita": ["Ottiene +1 a COSTRUIRE TRAPPOLE", "Ottiene +1 a Mira quando è nascosto", "Inizia la partita con una trappola a scelta"]
    },
    "Carabiniere": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 1, "Conoscenza": 0},
        "armi": ["Pistole", "Armi da fuoco", "Armi militari"],
        "abilita_uniche": ["Costruire trappole", "Rialzarsi", "Mira"],
        "capacita": ["Ottiene +1 a Mira con le pistole", "Consente di utilizzare ogni arma militare ma con un -1", "Inizia la partita con una pistola con 3 o 4 proiettili"]
    },
    "Cecchino": {
        "stats": {"Forza": 0, "Agilità": 1, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 0},
        "armi": ["Pistole", "Armi da fuoco"],
        "abilita_uniche": ["Manomettere", "Rialzarsi", "Mira"],
        "capacita": ["Competenza su Cecchino", "Ottiene +1 a Mira con il cecchino", "Ottiene +1 a NASCONDERSI", "Inizia la partita con un cecchino con 2 proiettili"]
    },
    "Chimico": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 1},
        "armi": [],
        "abilita_uniche": ["Costruire oggetti", "Decifrare"],
        "capacita": ["Ottiene +1 a DECIFRARE", "Può usare COSTRUIRE OGGETTI per produrre acidi e carburanti", "Ottiene +1 su RACCOGLIERE DATI"]
    },
    "Collaudatore Balistico": {
        "stats": {"Forza": 1, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 1},
        "armi": ["Pistole", "Armi da fuoco", "Armi militari", "Esplosivi complessi"],
        "abilita_uniche": ["Rompere", "Mira", "Decodificare"],
        "capacita": ["Ottiene +1 ad ASCOLTARE ed OSSERVARE", "Ottiene +1 a Mira se il bersaglio è fermo", "Ottiene +1 a SCHIVARE"]
    },
    "Coraggioso": {
        "stats": {"Forza": 1, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 0, "Risolutezza": 2, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Rompere", "Rialzarsi"],
        "capacita": ["Può agire nelle prima scena in presenza di un mostro senza fare alcun tiro", "Ottiene +1 ad ogni prova su RISOLUTEZZA quando un compagno è in pericolo", "Ottiene +1 a ROMPERE e RIALZARSI"]
    },
    "Esperto di Droni": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 2, "Risolutezza": 0, "Conoscenza": 1},
        "armi": ["Pistole", "Armi da fuoco"],
        "abilita_uniche": ["Riparare", "Mira"],
        "capacita": ["Quando usa GUIDARE per pilotare un drone ottiene +1 invece che -1", "Può usare RIPARARE per aggiustare o modificare droni", "Può utilizzare MIRA per sparare attraverso il drone ma ottiene -1", "Inizia la partita con un drone a scelta con caricabatteria"]
    },
    "Esperto di Poligono": {
        "stats": {"Forza": 0, "Agilità": 1, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 0},
        "armi": ["Pistole"],
        "abilita_uniche": ["Rompere", "Mira"],
        "capacita": ["Competenza nelle armi: una singola arma a propria scelta", "Ottiene +1 a MIRA con le armi in cui è competente", "Può utilizzare le armi leggere due alla volta ma ottiene -1 ai tiri", "Può utilizzare RIPARARE per aggiustare o modificare le armi in cui è competente. Tira 2 volte e tiene il risultato migliore"]
    },
    "Esploratore": {
        "stats": {"Forza": 0, "Agilità": 1, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 0},
        "armi": ["Pistole", "Armi semplici"],
        "abilita_uniche": ["Costruire trappole", "Rialzarsi", "Mira"],
        "capacita": ["Ottiene +1 ad ASCOLTARE ed OSSERVARE", "Ottiene +1 a COSTRUIRE TRAPPOLE", "Ottiene +1 a MIRA con le armi semplici"]
    },
    "Forzuto": {
        "stats": {"Forza": 2, "Agilità": 0, "Tenacia": 1, "Destrezza manuale": 0, "Risolutezza": 0, "Conoscenza": 0},
        "armi": ["Pistole"],
        "abilita_uniche": ["Rompere", "Mira"],
        "capacita": ["Può trasportare grossi pesi (orientativamente 25kg/statistica di Forza) in corsa senza affaticarsi", "Può utilizzare ROMPERE in corsa senza rallentare", "Inizia il gioco con una pistola con 2 proiettili"]
    },
    "Hacker": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 1},
        "armi": [],
        "abilita_uniche": ["Manomettere", "Decifrare", "Decodificare"],
        "capacita": ["Tira 2 volte e tiene il risultato migliore ad ogni prova su DECODIFICARE per bucare sistemi di sicurezza o ottenere codici", "Può utilizzare MANOMETTERE per prendere il controllo di sistemi di sicurezza o telecamere presenti", "Inizia la partita con un computer con caricatore e chiavetta dati (USB)"]
    },
    "Informatico": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 0, "Risolutezza": 1, "Conoscenza": 2},
        "armi": [],
        "abilita_uniche": ["Riparare", "Decifrare", "Decodificare"],
        "capacita": ["Ottiene +1 a RIPARARE per aggiustare o modificare attrezzatura informatica", "Tira 2 volte e tiene il risultato migliore ad ogni prova su DECIFRARE", "Ottiene +1 a DECODIFICARE per ottenere codici di sicurezza"]
    },
    "Ingegnere Minerario": {
        "stats": {"Forza": 1, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 0, "Risolutezza": 1, "Conoscenza": 1},
        "armi": ["Esplosivi complessi"],
        "abilita_uniche": ["Rompere", "Costruire oggetti", "Decodificare"],
        "capacita": ["Può usare COSTRUIRE OGGETTI per costruire esplosivi", "Ottiene +1 a DECODIFICARE per disinnescare esplosivi", "Ottiene +1 a RISOLUTEZZA per affrontare il pericolo"]
    },
    "Marine": {
        "stats": {"Forza": 1, "Agilità": 1, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 0, "Conoscenza": 0},
        "armi": ["Pistole", "Armi da fuoco", "Armi militari"],
        "abilita_uniche": ["Rompere", "Mira", "Rialzarsi"],
        "capacita": ["Ottiene +1 a ROMPERE", "Ottiene +1 a RIALZARSI e SCHIVARE", "Consente di guidare mezzi militari"]
    },
    "Militare": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 1, "Destrezza manuale": 1, "Risolutezza": 1, "Conoscenza": 0},
        "armi": ["Pistole", "Armi da fuoco", "Armi militari"],
        "abilita_uniche": ["Manomettere", "Mira", "Costruire trappole"],
        "capacita": ["Consente di guidare mezzi militari", "Fornisce +1 a MIRA quando si utilizza un'arma militare", "Inizia la partita con un'arma militare a propria scelta con qualche colpo"]
    },
    "Medico": {
        "stats": {"Forza": 0, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 1, "Conoscenza": 1},
        "armi": [],
        "abilita_uniche": ["Medicare", "Produrre medicamento"],
        "capacita": ["Ottiene +1 a MEDICARE e CONOSCENZA", "Può riconoscere i farmaci senza scatola tramite un tiro su CONOSCENZA", "Inizia la partita con un numero variabile di bende tra 1 e 4 ed un pezzo di attrezzatura medica a sua scelta"]
    },
    "Polizia - Sezione Artificieri": {
        "stats": {"Forza": 1, "Agilità": 0, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 1, "Conoscenza": 0},
        "armi": ["Pistole", "Armi da fuoco", "Esplosivi complessi"],
        "abilita_uniche": ["Rompere", "Mira", "Decodificare"],
        "capacita": ["Tira 2 volte e tiene il risultato migliore ad ogni prova su DECODIFICARE per disinnescare un esplosivo", "Ottiene +1 a ROMPERE e non rischia di ferirsi in caso di fallimento", "Ottiene +1 a MIRA con le pistole"]
    },
    "Scalatore": {
        "stats": {"Forza": 1, "Agilità": 1, "Tenacia": 1, "Destrezza manuale": 0, "Risolutezza": 0, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Rompere", "Acrobazia", "Costruire oggetti"],
        "capacita": ["Tira 2 volte e tiene il risultato migliore ad ogni prova su SCALARE", "Ottiene +1 a TENACIA per resistere a malattie e stanchezza", "Ottiene +1 ad ACROBAZIA ed EQUILIBRIO"]
    },
    "Soccorritore": {
        "stats": {"Forza": 0, "Agilità": 1, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 1, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Riparare", "Medicare", "Produrre medicamento"],
        "capacita": ["Può effettuare medicazioni di fortuna in meno di 1 minuto ma con un -1 alla prova", "Ottiene +1 a GUIDARE", "Può utilizzare RIPARARE per aggiustare attrezzatura medica"]
    },
    "Vigile del fuoco": {
        "stats": {"Forza": 0, "Agilità": 1, "Tenacia": 0, "Destrezza manuale": 1, "Risolutezza": 1, "Conoscenza": 0},
        "armi": [],
        "abilita_uniche": ["Acrobazia", "Medicare", "Rialzarsi"],
        "capacita": ["Ottiene +1 ad ogni tiro su RISOLUTEZZA. Anche fallendo il tiro può compiere l'azione scelta ma con un -1 alla prova richiesta", "Ottiene +1 a GUIDARE", "Inizia il gioco con una benda sterile ed una pomata per le ustioni"]
    }
};

