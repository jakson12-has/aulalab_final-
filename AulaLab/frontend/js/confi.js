"use strict";

(() => {
    const hostname = window.location.hostname;
    let apiBase;

    const match = hostname.match(/^(.*)-\d+\.app\.github\.dev$/);

    if (match) {
        apiBase = `${window.location.protocol}//${match[1]}-3000.app.github.dev`;
    } else if (
        hostname === "localhost" ||
        hostname === "127.0.0.1"
    ) {
        apiBase = "http://localhost:3000";
    } else {
        // En producción, Express sirve tanto el frontend como la API
        // desde el mismo dominio (por ejemplo, Render).
        apiBase = window.location.origin;
    }

    window.AULALAB_CONFIG = Object.freeze({
        API_BASE: apiBase,

        ENDPOINTS: Object.freeze({
            ESTADO: "/api/estado",
            REGISTRO: "/api/registro",
            LOGIN: "/api/login",
            ME: "/api/me",

            MIS_INSTITUCIONES: "/api/estudiantes/mis-instituciones",
            INSCRIBIR_ESTUDIANTE: "/api/estudiantes",
            IMPORTAR_ESTUDIANTES: "/api/estudiantes/importar",
            ACTIVAR_ESTUDIANTE: "/api/estudiantes/activar"
        })
    });

    console.log("AulaLab API:", apiBase);
})();
