// script.js - ubicado en /js/

/**
 * ============================================================
 *  CATÁLOGO DE PINTURAS AL FRÍO - GUICAR 2025
 *  -------------------------------------------------------
 *  BLACKCOLOR          : 32 colores
 *  LA NIEVE            : 22 colores
 *  TX ORO              : 78 colores
 *  METALIZADOS         : 55 colores  (Oro Color Metálicos)
 *  ORO COLOR PREMIUM   : 132 colores (nuevo)
 *  TOTAL               : 319 colores
 * ============================================================
 */

const catalogoPinturas = {
    // ==================== BLACKCOLOR (32 colores) ====================
    blackcolor: [
        {id: "BF-804", hex: "#F3E5AB"}, {id: "BF-803", hex: "#FFF44F"},
        {id: "BF-801", hex: "#FFD300"}, {id: "BF-802", hex: "#FFB92D"},
        {id: "BF-806", hex: "#FF8000"}, {id: "BF-825", hex: "#F5F5DC"},
        {id: "BF-826", hex: "#CC7722"}, {id: "BF-824", hex: "#F3D2B3"},
        {id: "BF-820", hex: "#8DB600"}, {id: "BF-821", hex: "#00A86B"},
        {id: "BF-822", hex: "#006400"}, {id: "BF-823", hex: "#004B49"},
        {id: "BF-809", hex: "#B22222"}, {id: "BF-811", hex: "#960018"},
        {id: "BF-827", hex: "#674834"}, {id: "BF-832", hex: "#FFFFFF"},
        {id: "BF-819", hex: "#7FFFD4"}, {id: "BF-816", hex: "#87CEEB"},
        {id: "BF-817", hex: "#002366"}, {id: "BF-818", hex: "#000080"},
        {id: "BF-810", hex: "#D53032"}, {id: "BF-812", hex: "#FF00FF"},
        {id: "BF-828", hex: "#B24A2C"}, {id: "BF-830", hex: "#808080"},
        {id: "BF-805", hex: "#FF8C69"}, {id: "BF-807", hex: "#FFC0CB"},
        {id: "BF-808", hex: "#FFE4E1"}, {id: "BF-814", hex: "#D8BFD8"},
        {id: "BF-815", hex: "#8B00FF"}, {id: "BF-813", hex: "#610B0B"},
        {id: "BF-829", hex: "#452721"}, {id: "BF-831", hex: "#000000"}
    ],

    // ==================== LA NIEVE (22 colores) ====================
    la_nieve: [
        {id: "LN-01", hex: "#F8F9FA"}, {id: "LN-02", hex: "#FFD300"},
        {id: "LN-03", hex: "#FFFF00"}, {id: "LN-04", hex: "#F3D2B3"},
        {id: "LN-05", hex: "#FF4500"}, {id: "LN-06", hex: "#B22222"},
        {id: "LN-07", hex: "#C41E3A"}, {id: "LN-08", hex: "#610B0B"},
        {id: "LN-09", hex: "#FFB7C5"}, {id: "LN-10", hex: "#FF00FF"},
        {id: "LN-11", hex: "#DA70D6"}, {id: "LN-12", hex: "#9932CC"},
        {id: "LN-13", hex: "#007FFF"}, {id: "LN-14", hex: "#0077BE"},
        {id: "LN-15", hex: "#0047AB"}, {id: "LN-16", hex: "#00008B"},
        {id: "LN-17", hex: "#00A86B"}, {id: "LN-18", hex: "#355E3B"},
        {id: "LN-19", hex: "#006400"}, {id: "LN-20", hex: "#5C4033"},
        {id: "LN-21", hex: "#1C1C1C"}, {id: "LN-22", hex: "#808080"}
    ],

    // ==================== TX ORO (78 colores) ====================
    tx_oro: [
        {id: "TX301", hex: "#FFF44F"}, {id: "TX302", hex: "#FFD300"},
        {id: "TX303", hex: "#FFC000"}, {id: "TX304", hex: "#FFB347"},
        {id: "TX305", hex: "#FFA500"}, {id: "TX315", hex: "#BF8F00"},
        {id: "TX313", hex: "#F5D0B8"}, {id: "TX314", hex: "#D2A679"},
        {id: "TX310", hex: "#C68E17"}, {id: "TX311", hex: "#B8860B"},
        {id: "TX317", hex: "#C68E17"}, {id: "TX320", hex: "#8B4513"},
        {id: "TX306", hex: "#FFDAB9"}, {id: "TX340", hex: "#E6A9B0"},
        {id: "TX316", hex: "#C4A88D"}, {id: "TX318", hex: "#C35817"},
        {id: "TX319", hex: "#C35817"}, {id: "TX322", hex: "#A0522D"},
        {id: "TX307", hex: "#FA8072"}, {id: "TX308", hex: "#FF8C00"},
        {id: "TX309", hex: "#FF6F00"}, {id: "TX330", hex: "#8B008B"},
        {id: "TX339", hex: "#800000"}, {id: "TX321", hex: "#5C3A21"},
        {id: "TX333", hex: "#FF6B6B"}, {id: "TX334", hex: "#FF4500"},
        {id: "TX335", hex: "#FF6347"}, {id: "TX336", hex: "#B22222"},
        {id: "TX337", hex: "#C41E3A"}, {id: "TX323", hex: "#704214"},
        {id: "TX324", hex: "#FF69B4"}, {id: "TX331", hex: "#FFB6C1"},
        {id: "TX332", hex: "#FFC0CB"}, {id: "TX325", hex: "#FF1493"},
        {id: "TX329", hex: "#FF00FF"}, {id: "TX326", hex: "#FF0090"},
        {id: "TX327", hex: "#FFFDD0"}, {id: "TX328", hex: "#800080"},
        {id: "TX341", hex: "#C8A2C8"}, {id: "TX342", hex: "#9370DB"},
        {id: "TX343", hex: "#8B00FF"}, {id: "TX338", hex: "#6A0DAD"},
        {id: "TX344", hex: "#87CEEB"}, {id: "TX346", hex: "#B0C4DE"},
        {id: "TX345", hex: "#4682B4"}, {id: "TX351", hex: "#2E86C1"},
        {id: "TX350", hex: "#1E3A8A"}, {id: "TX347", hex: "#0000CD"},
        {id: "TX352", hex: "#98FF98"}, {id: "TX367", hex: "#00CED1"},
        {id: "TX354", hex: "#40E0D0"}, {id: "TX353", hex: "#00CED1"},
        {id: "TX348", hex: "#120A8F"}, {id: "TX349", hex: "#000080"},
        {id: "TX359", hex: "#8DB600"}, {id: "TX360", hex: "#6B8E23"},
        {id: "TX355", hex: "#50C878"}, {id: "TX361", hex: "#228B22"},
        {id: "TX366", hex: "#006400"}, {id: "TX363", hex: "#2E8B57"},
        {id: "TX356", hex: "#D4E157"}, {id: "TX357", hex: "#9ACD32"},
        {id: "TX358", hex: "#556B2F"}, {id: "TX362", hex: "#228B22"},
        {id: "TX364", hex: "#4B5320"}, {id: "TX365", hex: "#3B5323"},
        {id: "TX369", hex: "#FFFFFF"}, {id: "TX312", hex: "#F5F5DC"},
        {id: "TX368", hex: "#A9A9A9"}, {id: "TX370", hex: "#000000"},
        {id: "TX401", hex: "#CCFF00"}, {id: "TX402", hex: "#FF6A00"},
        {id: "TX403", hex: "#FF4500"}, {id: "TX404", hex: "#FF0000"},
        {id: "TX405", hex: "#FF007F"}, {id: "TX406", hex: "#FF00FF"},
        {id: "TX407", hex: "#00FF00"}, {id: "TX408", hex: "#00FF7F"}
    ],

    // ==================== METALIZADOS – ORO COLOR METÁLICOS (55 colores) ====================
    metalizados: [
        // ----- METÁLICOS AL AGUA (45 colores) -----
        {id: "F227", hex: "#C0C0C0"}, {id: "F216", hex: "#C0C0C0"},
        {id: "F217", hex: "#C0C0C0"}, {id: "F200", hex: "#C0C0C0"},
        {id: "F201", hex: "#C0C0C0"}, {id: "F202", hex: "#C0C0C0"},
        {id: "F211", hex: "#C0C0C0"}, {id: "F203", hex: "#C0C0C0"},
        {id: "F208", hex: "#C0C0C0"}, {id: "F220", hex: "#C0C0C0"},
        {id: "F238", hex: "#C0C0C0"}, {id: "F243", hex: "#C0C0C0"},
        {id: "F204", hex: "#C0C0C0"}, {id: "F205", hex: "#C0C0C0"},
        {id: "F240", hex: "#C0C0C0"}, {id: "F226", hex: "#C0C0C0"},
        {id: "F224", hex: "#C0C0C0"}, {id: "F231", hex: "#C0C0C0"},
        {id: "F207", hex: "#C0C0C0"}, {id: "F206", hex: "#C0C0C0"},
        {id: "F242", hex: "#C0C0C0"}, {id: "F225", hex: "#C0C0C0"},
        {id: "F218", hex: "#C0C0C0"}, {id: "F219", hex: "#C0C0C0"},
        {id: "F233", hex: "#C0C0C0"}, {id: "F236", hex: "#C0C0C0"},
        {id: "F221", hex: "#C0C0C0"}, {id: "F235", hex: "#C0C0C0"},
        {id: "F213", hex: "#C0C0C0"}, {id: "F239", hex: "#C0C0C0"},
        {id: "F215", hex: "#C0C0C0"}, {id: "F214", hex: "#C0C0C0"},
        {id: "F228", hex: "#C0C0C0"}, {id: "F237", hex: "#C0C0C0"},
        {id: "F209", hex: "#C0C0C0"}, {id: "F212", hex: "#C0C0C0"},
        {id: "F222", hex: "#C0C0C0"}, {id: "F241", hex: "#C0C0C0"},
        {id: "F229", hex: "#C0C0C0"}, {id: "F234", hex: "#C0C0C0"},
        {id: "F244", hex: "#C0C0C0"}, {id: "F210", hex: "#C0C0C0"},
        {id: "F223", hex: "#C0C0C0"}, {id: "F232", hex: "#C0C0C0"},
        {id: "F230", hex: "#C0C0C0"},
        // ----- HOJILLA LÍQUIDA (5 colores) -----
        {id: "HL-01", hex: "#C0C0C0"}, {id: "HL-05", hex: "#C0C0C0"},
        {id: "HL-02", hex: "#C0C0C0"}, {id: "HL-04", hex: "#C0C0C0"},
        {id: "HL-03", hex: "#C0C0C0"},
        // ----- POLVOS METÁLICOS (3 colores) -----
        {id: "PM-501", hex: "#C0C0C0"}, {id: "PM-502", hex: "#C0C0C0"},
        {id: "PM-503", hex: "#C0C0C0"},
        // ----- GEL METALIZADO (2 colores) -----
        {id: "GM-01", hex: "#C0C0C0"}, {id: "GM-02", hex: "#C0C0C0"}
    ],

    // ==================== ORO COLOR PREMIUM (132 colores) ====================
    oro_color_premium: [
        // 1. Gama de Amarillos, Cremas y Ocres (16)
        {id: "A-601", hex: "#C0C0C0"}, {id: "A-602", hex: "#C0C0C0"},
        {id: "A-603", hex: "#C0C0C0"}, {id: "A-604", hex: "#C0C0C0"},
        {id: "A-605", hex: "#C0C0C0"}, {id: "A-606", hex: "#C0C0C0"},
        {id: "A-607", hex: "#C0C0C0"}, {id: "A-608", hex: "#C0C0C0"},
        {id: "A-609", hex: "#C0C0C0"}, {id: "A-610", hex: "#C0C0C0"},
        {id: "A-673", hex: "#C0C0C0"}, {id: "A-686", hex: "#C0C0C0"},
        {id: "A-695", hex: "#C0C0C0"}, {id: "A-696", hex: "#C0C0C0"},
        {id: "A-699", hex: "#C0C0C0"}, {id: "A-707", hex: "#C0C0C0"},
        // 2. Gama de Naranjas, Sienas y Terracotas (10)
        {id: "A-611", hex: "#C0C0C0"}, {id: "A-612", hex: "#C0C0C0"},
        {id: "A-613", hex: "#C0C0C0"}, {id: "A-614", hex: "#C0C0C0"},
        {id: "A-615", hex: "#C0C0C0"}, {id: "A-670", hex: "#C0C0C0"},
        {id: "A-685", hex: "#C0C0C0"}, {id: "A-694", hex: "#C0C0C0"},
        {id: "A-719", hex: "#C0C0C0"}, {id: "A-731", hex: "#C0C0C0"},
        // 3. Gama de Cafés, Marrones y Tonos Piel (16)
        {id: "A-663", hex: "#C0C0C0"}, {id: "A-664", hex: "#C0C0C0"},
        {id: "A-665", hex: "#C0C0C0"}, {id: "A-666", hex: "#C0C0C0"},
        {id: "A-667", hex: "#C0C0C0"}, {id: "A-668", hex: "#C0C0C0"},
        {id: "A-669", hex: "#C0C0C0"}, {id: "A-671", hex: "#C0C0C0"},
        {id: "A-672", hex: "#C0C0C0"}, {id: "A-688", hex: "#C0C0C0"},
        {id: "A-697", hex: "#C0C0C0"}, {id: "A-698", hex: "#C0C0C0"},
        {id: "A-700", hex: "#C0C0C0"}, {id: "A-701", hex: "#C0C0C0"},
        {id: "A-730", hex: "#C0C0C0"}, {id: "A-732", hex: "#C0C0C0"},
        // 4. Gama de Rojos (10)
        {id: "A-616", hex: "#C0C0C0"}, {id: "A-617", hex: "#C0C0C0"},
        {id: "A-618", hex: "#C0C0C0"}, {id: "A-619", hex: "#C0C0C0"},
        {id: "A-633", hex: "#C0C0C0"}, {id: "A-687", hex: "#C0C0C0"},
        {id: "A-708", hex: "#C0C0C0"}, {id: "A-710", hex: "#C0C0C0"},
        {id: "A-712", hex: "#C0C0C0"}, {id: "A-720", hex: "#C0C0C0"},
        // 5. Gama de Rosas, Magentas, Violetas y Morados (26)
        {id: "A-620", hex: "#C0C0C0"}, {id: "A-621", hex: "#C0C0C0"},
        {id: "A-622", hex: "#C0C0C0"}, {id: "A-623", hex: "#C0C0C0"},
        {id: "A-624", hex: "#C0C0C0"}, {id: "A-625", hex: "#C0C0C0"},
        {id: "A-626", hex: "#C0C0C0"}, {id: "A-627", hex: "#C0C0C0"},
        {id: "A-628", hex: "#C0C0C0"}, {id: "A-629", hex: "#C0C0C0"},
        {id: "A-630", hex: "#C0C0C0"}, {id: "A-631", hex: "#C0C0C0"},
        {id: "A-632", hex: "#C0C0C0"}, {id: "A-693", hex: "#C0C0C0"},
        {id: "A-705", hex: "#C0C0C0"}, {id: "A-709", hex: "#C0C0C0"},
        {id: "A-711", hex: "#C0C0C0"}, {id: "A-721", hex: "#C0C0C0"},
        {id: "A-722", hex: "#C0C0C0"}, {id: "A-723", hex: "#C0C0C0"},
        {id: "A-724", hex: "#C0C0C0"}, {id: "A-725", hex: "#C0C0C0"},
        {id: "A-726", hex: "#C0C0C0"}, {id: "A-727", hex: "#C0C0C0"},
        {id: "A-728", hex: "#C0C0C0"}, {id: "A-729", hex: "#C0C0C0"},
        // 6. Gama de Azules y Turquesas (20)
        {id: "A-634", hex: "#C0C0C0"}, {id: "A-635", hex: "#C0C0C0"},
        {id: "A-636", hex: "#C0C0C0"}, {id: "A-637", hex: "#C0C0C0"},
        {id: "A-638", hex: "#C0C0C0"}, {id: "A-639", hex: "#C0C0C0"},
        {id: "A-640", hex: "#C0C0C0"}, {id: "A-641", hex: "#C0C0C0"},
        {id: "A-642", hex: "#C0C0C0"}, {id: "A-643", hex: "#C0C0C0"},
        {id: "A-644", hex: "#C0C0C0"}, {id: "A-645", hex: "#C0C0C0"},
        {id: "A-646", hex: "#C0C0C0"}, {id: "A-647", hex: "#C0C0C0"},
        {id: "A-648", hex: "#C0C0C0"}, {id: "A-649", hex: "#C0C0C0"},
        {id: "A-660", hex: "#C0C0C0"}, {id: "A-703", hex: "#C0C0C0"},
        {id: "A-704", hex: "#C0C0C0"}, {id: "A-716", hex: "#C0C0C0"},
        // 7. Gama de Verdes (23)
        {id: "A-650", hex: "#C0C0C0"}, {id: "A-651", hex: "#C0C0C0"},
        {id: "A-652", hex: "#C0C0C0"}, {id: "A-653", hex: "#C0C0C0"},
        {id: "A-654", hex: "#C0C0C0"}, {id: "A-655", hex: "#C0C0C0"},
        {id: "A-656", hex: "#C0C0C0"}, {id: "A-657", hex: "#C0C0C0"},
        {id: "A-658", hex: "#C0C0C0"}, {id: "A-659", hex: "#C0C0C0"},
        {id: "A-661", hex: "#C0C0C0"}, {id: "A-662", hex: "#C0C0C0"},
        {id: "A-689", hex: "#C0C0C0"}, {id: "A-690", hex: "#C0C0C0"},
        {id: "A-691", hex: "#C0C0C0"}, {id: "A-692", hex: "#C0C0C0"},
        {id: "A-702", hex: "#C0C0C0"}, {id: "A-706", hex: "#C0C0C0"},
        {id: "A-713", hex: "#C0C0C0"}, {id: "A-714", hex: "#C0C0C0"},
        {id: "A-715", hex: "#C0C0C0"}, {id: "A-717", hex: "#C0C0C0"},
        {id: "A-718", hex: "#C0C0C0"},
        // 8. Neutros (Blancos, Negros y Grises) (4)
        {id: "A-674", hex: "#C0C0C0"}, {id: "A-675", hex: "#C0C0C0"},
        {id: "A-676", hex: "#C0C0C0"}, {id: "A-677", hex: "#C0C0C0"},
        // 9. Línea de Fluorescentes (7)
        {id: "A-678", hex: "#C0C0C0"}, {id: "A-679", hex: "#C0C0C0"},
        {id: "A-680", hex: "#C0C0C0"}, {id: "A-681", hex: "#C0C0C0"},
        {id: "A-682", hex: "#C0C0C0"}, {id: "A-683", hex: "#C0C0C0"},
        {id: "A-684", hex: "#C0C0C0"}
    ]
}; // Fin de catalogoPinturas

// ============================================================
//  LISTAS DE NOMBRES (en orden exacto, coinciden con los arrays anteriores)
// ============================================================

// BLACKCOLOR (32 nombres)
const blackcolorNombres = [
    "Vainilla", "Amarillo Claro", "Amarillo Sol", "Amarillo Araguaney",
    "Naranja", "Beige", "Ocre", "Piel",
    "Verde Manzana", "Verde Perico", "Verde Navidad", "Verde Intenso",
    "Rojo Navidad", "Carmín", "Marrón Avellana", "Blanco",
    "Aguamarina", "Azul Cielo", "Azul Rey", "Azul Intenso",
    "Rojo Fresa", "Fucsia", "Terracota", "Gris",
    "Salmón", "Rosado", "Rosado Claro", "Lila",
    "Violeta", "Vino Tinto", "Marrón Caoba", "Negro"
];

// LA NIEVE (22 nombres)
const laNieveNombres = [
    "Blanco Sierra Nevada", "Amarillo Turpial", "Amarillo Narciso", "Carne",
    "Naranja Atardecer", "Rojo Navidad", "Rojo Cardenal", "Vinotinto",
    "Rosado Apamate", "Fucsia Trinitaria", "Orquídea", "Violeta Buganvilla",
    "Azul Los Roques", "Azul Mar Caribe", "Azul Mochima", "Azul Choroní",
    "Verde Canaima", "Verde Amazona", "Verde Navidad", "Marrón Gran Sabana",
    "Negro Petróleo", "Gris"
];

// TX ORO (78 nombres)
const txOroNombres = [
    "Amarillo Limón", "Amarillo Canario", "Amarillo Girasol", "Amarillo Oro",
    "Amarillo Cadmio", "Ámbar", "Piel", "Piel Bronceada",
    "Ocre", "Mostaza", "Caramelo", "Marrón Peluche",
    "Melocotón", "Rosa Vieja", "Capuchino", "Siena Tostada",
    "Terracota Roja", "Tierra Tostada", "Salmón", "Naranja",
    "Zanahoria", "Rojo Púrpura", "Vino Tinto", "Marrón Intenso",
    "Coral", "Rojo Fuego", "Rojo Tomate", "Rojo Navidad",
    "Rojo Carmín", "Sepia", "Pink", "Rosado",
    "Pétalo de Rosa", "Rosa Barbie", "Fucsia", "Magenta",
    "Crema Fresca", "Mora", "Lila", "Violeta Suave",
    "Violeta Intenso", "Púrpura", "Azul Celeste", "Azul Seda",
    "Azul Nublado", "Azul Cerúleo", "Azul Rey", "Azul Cobalto",
    "Verde Menta", "Aguamarina", "Turquesa Suave", "Turquesa Intenso",
    "Azul Ultramar", "Azul Marino", "Verde Manzana", "Verde Aguacate",
    "Verde Esmeralda", "Verde Grama", "Verde Botella", "Verde Pino",
    "Verde Pera", "Verde Pistacho", "Verde Aceituna", "Verde Hoja",
    "Verde Militar", "Verde Sombra", "Blanco", "Marfil",
    "Gris Elefante", "Negro", "Amarillo Neón Fluorescente", "Maracuyá Neón Fluorescente",
    "Naranja Neón Fluorescente", "Rojo Neón Fluorescente", "Rosa Neón Fluorescente",
    "Magenta Neón Fluorescente", "Manzana Neón Fluorescente", "Verde Neón Fluorescente"
];

// METALIZADOS – ORO COLOR METÁLICOS (55 nombres)
const metalizadosNombres = [
    // Metálicos al Agua (45)
    "AMARILLO METALICO", "ORO CALIPSO", "ORO 24", "ORO GUAYANES",
    "ORO QUEMADO", "ORO BRILLANTE", "ORO INCA", "BRONCE",
    "BRONCE ANTIGUO", "BRONCE CAFÉ", "CARAMELO METALICO", "ORO ROSA",
    "COBRIZO", "SUPER COBRE", "CAFÉ METALICO", "NARANJA METALICO",
    "ROJO NAVIDAD", "ROJO RUBI", "ROJO METALICO", "ROJO AÑEJO",
    "PALO DE ROSA", "ROSA METALICO", "ROSA INTENSO", "FUCSIA METALICO",
    "VINO METALICO", "ORQUIDEA METALICO", "LILA METALICO", "PURPURA METALICO",
    "VIOLETA METALICO", "NEGRO METALICO", "AZUL METALICO", "AZUL MILENIUM",
    "AZUL ZAFIRO", "AZUL GALACTICO", "HIERRO FORJADO", "VERDE JADE",
    "TURQUESA METALICO", "VERDE BOTELLA", "VERDE NAVIDAD", "VERDE ACEITUNA",
    "ALUMINIO", "PLATA", "PERLA METALICA", "CHAMPAN METALICO", "VERDE ORO",
    // Hojilla Líquida (5)
    "ORO", "ORO BRONCE", "CHAMPAGNE", "COBRE", "PLATA",
    // Polvos Metálicos (3)
    "ORO MINERO", "ORO BRONCE", "PLATA",
    // Gel Metalizado (2)
    "ORO DIAMANTE", "ORO AZTECA"
];

// ==================== ORO COLOR PREMIUM (132 nombres) ====================
const oroColorPremiumNombres = [
    // 1. Gama de Amarillos, Cremas y Ocres
    "Amarillo Canario", "Amarillo Girasol", "Amarillo Araguaney",
    "Amarillo Miel", "Amarillo Suave", "Trigo", "Crema", "Vainilla",
    "Ivory", "Blanco Añejo", "Marfil", "Mostaza", "Ocre Intenso",
    "Hueso", "Amarillo Pastel", "Amarillo Sol",
    // 2. Gama de Naranjas, Sienas y Terracotas
    "Zanahoria", "Naranja", "Naranja Exótico", "Granate", "Durazno",
    "Terracota Amarilla", "Caramelo Brillante", "Siena Natural",
    "Terracota Brillante", "Naranja Carnaval",
    // 3. Gama de Cafés, Marrones y Tonos Piel
    "Caoba", "Siena Intenso", "Canela", "Tabaco Fuerte", "Tabaco Claro",
    "Tamarindo", "Marrón Peluche", "Piel", "Piel Angelical",
    "Rojo Teja", "Piel Bronceada", "Piel Mulata", "Café Intenso",
    "Wengue", "Rubor Piel", "Café Rojizo",
    // 4. Gama de Rojos
    "Rojo Christmas", "Rojo Magestad", "Rojo Fuego", "Rojo Navidad",
    "Coral", "Vino Tinto", "Carmín Rosa", "Coralina", "Ágata",
    "Escarlata Country",
    // 5. Gama de Rosas, Magentas, Violetas y Morados
    "Violeta", "Púrpura", "Turmalina", "Uva", "Lavanda", "Lila",
    "Fucsia", "Fucsia Suave", "Rosa Inglesa", "Crema Rosa", "Fresita",
    "Rosita", "Rosa Country", "Rosa Vieja", "Petunia Country",
    "Magenta Premium", "Rosa Barbie", "Rosado", "Pink", "Fucsia Intenso",
    "Bromelia", "Mora", "Dhalia", "Magenta Claro", "Magenta Primavera",
    "Malbec",
    // 6. Gama de Azules y Turquesas
    "Azul Ultramar", "Azul Intenso", "Índigo", "Azul Profundo",
    "Azul Nocturno", "Azul Cobalto", "Azul Violeta", "Azul Rey",
    "Azul Gema", "Azul Country", "Azul Bebé", "Azul Suave",
    "Azul Pacífico", "Azul Seda", "Turquesa Intenso", "Turquesa Claro",
    "Aguamarina", "Celeste", "Turquesa", "Verde Turquesa",
    // 7. Gama de Verdes
    "Verde Añejo", "Verde Menta", "Verde Bosque", "Verde Navidad",
    "Verde Oliva", "Verde Fresco", "Verde Manzana", "Verde Citrus",
    "Verde Agua", "Verde Brasil", "Verde Limón", "Verde Claro",
    "Verde Óxido", "Verde Happy", "Verde Lima", "Verde Aceituna",
    "Gris Sage", "Verde Selva", "Verde Militar", "Verde Grama",
    "Verde Pastel", "Verde Leticia", "Verde Amazonas",
    // 8. Neutros
    "Gris", "Gris Humo", "Blanco", "Negro",
    // 9. Línea de Fluorescentes
    "Amarillo Fluorescente", "Verde Fluorescente", "Rosa Fluorescente",
    "Rojo Fluorescente", "Naranja Fluorescente", "Magenta Fluorescente",
    "Maracuyá Fluorescente"
];

// ============================================================
//  CONSTRUCCIÓN DE LA LISTA DE PRODUCTOS (319 en total)
// ============================================================
const products = [];

// ----- BLACKCOLOR (32 productos) -----
for (let i = 0; i < catalogoPinturas.blackcolor.length; i++) {
    const colorData = catalogoPinturas.blackcolor[i];
    const nombre = blackcolorNombres[i];
    products.push({
        id: `black_${colorData.id.replace(/-/g, "_")}`,
        nombre: `${nombre} (${colorData.id})`,
        categoria: "BLACKCOLOR",
        presentacion: "Envase 60ml",
        contenido: 1,
        stock: 999,
        tipoUnidad: "unidad",
        step: 3,
        minimo: 3,
        hex: colorData.hex
    });
}

// ----- LA NIEVE (22 productos) -----
for (let i = 0; i < catalogoPinturas.la_nieve.length; i++) {
    const colorData = catalogoPinturas.la_nieve[i];
    const nombre = laNieveNombres[i];
    products.push({
        id: `lanieve_${colorData.id.toLowerCase()}`,
        nombre: nombre,
        categoria: "LA NIEVE",
        presentacion: "Envase 60ml",
        contenido: 1,
        stock: 999,
        tipoUnidad: "unidad",
        step: 3,
        minimo: 3,
        hex: colorData.hex
    });
}

// ----- TX ORO (78 productos) -----
for (let i = 0; i < catalogoPinturas.tx_oro.length; i++) {
    const colorData = catalogoPinturas.tx_oro[i];
    const nombre = txOroNombres[i];
    products.push({
        id: `txoro_${colorData.id.toLowerCase()}`,
        nombre: `${nombre} (${colorData.id})`,
        categoria: "TX ORO",
        presentacion: "Envase 60ml",
        contenido: 1,
        stock: 999,
        tipoUnidad: "unidad",
        step: 3,
        minimo: 3,
        hex: colorData.hex
    });
}

// ----- METALIZADOS (55 productos) -----
for (let i = 0; i < catalogoPinturas.metalizados.length; i++) {
    const colorData = catalogoPinturas.metalizados[i];
    const nombre = metalizadosNombres[i];
    products.push({
        id: `metal_${colorData.id.toLowerCase().replace(/-/g, "_")}`,
        nombre: `${nombre} (${colorData.id})`,
        categoria: "METALIZADOS",
        presentacion: "Envase 60ml",
        contenido: 1,
        stock: 999,
        tipoUnidad: "unidad",
        step: 3,
        minimo: 3,
        hex: colorData.hex
    });
}

// ----- ORO COLOR PREMIUM (132 productos) -----
for (let i = 0; i < catalogoPinturas.oro_color_premium.length; i++) {
    const colorData = catalogoPinturas.oro_color_premium[i];
    const nombre = oroColorPremiumNombres[i];
    products.push({
        id: `oropremium_${colorData.id.toLowerCase().replace(/-/g, "_")}`,
        nombre: `${nombre} (${colorData.id})`,
        categoria: "ORO COLOR PREMIUM",
        presentacion: "Envase 60ml",
        contenido: 1,
        stock: 999,
        tipoUnidad: "unidad",
        step: 3,
        minimo: 3,
        hex: colorData.hex
    });
}

// ============================================================
//  RESTO DEL CÓDIGO (LÓGICA DEL CARRITO, UI, ETC.)
// ============================================================
let cart = [];
let currentCategory = null;

function escapeHtml(str) {
    return str.replace(/[&<>]/g, m => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[m]));
}

function showToast(msg) {
    let toast = document.createElement("div");
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-black/90 border border-[var(--color-primary)] text-[var(--color-primary)] text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-full z-[100] shadow-2xl toast-animate";
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function saveCart() {
    localStorage.setItem("guicar_cart_pinturas", JSON.stringify(cart));
}

function loadCart() {
    let s = localStorage.getItem("guicar_cart_pinturas");
    cart = s ? JSON.parse(s) : [];
    updateCartUI();
}

function formatCantidadConPaquetes(envases) {
    if (envases === 0) return "0 und";
    let paquetes12 = Math.floor(envases / 12);
    let resto = envases % 12;
    let partes = [];
    if (paquetes12 > 0) {
        partes.push(`${paquetes12} paq. (${paquetes12 * 12} und)`);
    }
    if (resto > 0) {
        partes.push(`${resto} und`);
    }
    return partes.join(" + ");
}

function addToCart(product) {
    let existing = cart.find(i => i.productId === product.id);
    if (existing) {
        let nueva = existing.cantidad + product.step;
        if (nueva > product.stock) {
            showToast(`Stock máximo para ${product.nombre}`);
            return;
        }
        existing.cantidad = nueva;
    } else {
        cart.push({
            productId: product.id,
            nombre: product.nombre,
            categoria: product.categoria,
            presentacion: product.presentacion,
            contenido: product.contenido,
            cantidad: product.minimo,
            stockMax: product.stock,
            tipoUnidad: product.tipoUnidad,
            step: product.step,
            hex: product.hex
        });
    }
    saveCart();
    updateCartUI();
    showToast(`✓ ${product.nombre} · +3 und`);
}

function changeQty(productId, delta) {
    let idx = cart.findIndex(i => i.productId === productId);
    if (idx === -1) return;
    let step = cart[idx].step || 3;
    let nueva = cart[idx].cantidad + (delta * step);
    if (nueva <= 0) {
        cart.splice(idx, 1);
    } else {
        if (nueva > cart[idx].stockMax) nueva = cart[idx].stockMax;
        cart[idx].cantidad = nueva;
    }
    saveCart();
    updateCartUI();
}

function removeItem(productId) {
    cart = cart.filter(i => i.productId !== productId);
    saveCart();
    updateCartUI();
    showToast('Producto eliminado');
}

// ==================== MODAL DE CONFIRMACIÓN ====================
function openClearModal() {
    const modal = document.getElementById('clearModal');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-card').classList.remove('scale-95');
    modal.querySelector('.modal-card').classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

function closeClearModal() {
    const modal = document.getElementById('clearModal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-card').classList.remove('scale-100');
    modal.querySelector('.modal-card').classList.add('scale-95');
    document.body.style.overflow = '';
}

function confirmClearCart() {
    closeClearModal();
    cart = [];
    saveCart();
    updateCartUI();
    showToast('Carrito vaciado');
}

// ==================== ACTUALIZAR UI DEL CARRITO ====================
function updateCartUI() {
    let totalEnvases = cart.reduce((s, i) => s + i.cantidad, 0);
    let totalPaquetesDe3 = totalEnvases / 3;
    let badge = document.getElementById("cartBadge");
    if (badge) {
        if (totalEnvases > 0) {
            badge.innerText = totalPaquetesDe3 > 99 ? "99+" : totalPaquetesDe3;
            badge.classList.remove("hidden");
            badge.classList.add("flex");
        } else {
            badge.classList.add("hidden");
        }
    }
    document.getElementById("cartCount").innerHTML = `(<span class="text-neon-green font-bold text-base">${totalEnvases} envases</span>)`;
    
    let emptyDiv = document.getElementById("cartEmpty"),
        itemsDiv = document.getElementById("cartItems"),
        footer = document.getElementById("cartFooter");
    if (totalEnvases === 0) {
        emptyDiv.classList.remove("hidden");
        itemsDiv.classList.add("hidden");
        footer.classList.add("hidden");
        return;
    }
    emptyDiv.classList.add("hidden");
    itemsDiv.classList.remove("hidden");
    footer.classList.remove("hidden");

    let itemsHtml = `<div class="flex justify-end mb-4">
        <button onclick="openClearModal()" class="flex items-center gap-2 text-neon-green text-xs md:text-sm font-medium hover:underline transition-colors">
            <i data-lucide="trash-2" class="w-4 h-4"></i> Vaciar Carrito
        </button>
    </div>`;

    itemsHtml += cart.map(item => {
        let envases = item.cantidad;
        let cantidadTexto = formatCantidadConPaquetes(envases);
        let paquetesDe3 = envases / 3;
        let colorCircle = `<span class="color-circle" style="background: ${item.hex};"></span>`;
        return `<div class="glass-card p-5 rounded-3xl flex flex-col gap-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="font-semibold text-white tracking-tight leading-tight mb-1">${colorCircle}${escapeHtml(item.nombre)}</p>
                            <p class="text-neon-green text-xs md:text-sm font-medium">${item.presentacion}</p>
                        </div>
                        <button onclick="removeItem('${item.productId}')" class="text-zinc-600 hover:text-[var(--color-primary)] transition-colors">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="text-xs md:text-sm font-bold text-[var(--color-primary)] uppercase tracking-tighter">
                            ${cantidadTexto}
                        </div>
                        <div class="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                            <button onclick="changeQty('${item.productId}', -1)" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"><i data-lucide="minus" class="w-4 h-4"></i></button>
                            <span class="w-10 text-center text-sm font-bold text-white">${paquetesDe3} ×3</span>
                            <button onclick="changeQty('${item.productId}', 1)" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"><i data-lucide="plus" class="w-4 h-4"></i></button>
                        </div>
                    </div>
                </div>`;
    }).join("");

    itemsDiv.innerHTML = itemsHtml;
    
    let summaryMap = new Map();
    cart.forEach(item => {
        let marca = item.categoria;
        let env = item.cantidad;
        if (summaryMap.has(marca)) {
            summaryMap.get(marca).envases += env;
        } else {
            summaryMap.set(marca, { envases: env });
        }
    });
    let summaryDiv = document.getElementById("cartSummaryLines");
    if (summaryDiv) {
        let html = "";
        for (let [marca, val] of summaryMap.entries()) {
            let totalEnv = val.envases;
            let paq3 = totalEnv / 3;
            let textoPaq12 = formatCantidadConPaquetes(totalEnv);
            html += `<span class="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[var(--color-primary)]/30 uppercase tracking-wider">
                        ${marca}: ${totalEnv} envases (${paq3} paq. de 3) → ${textoPaq12}
                    </span>`;
        }
        summaryDiv.innerHTML = html;
    }
    lucide.createIcons();
}

function sendWhatsApp() {
    if (cart.length === 0) {
        alert("Carrito vacío");
        return;
    }
    let msg = `📋 SOLICITUD DE COTIZACIÓN - PINTURAS AL FRÍO%0A%0A`;
    msg += `Destinatario: INVERSIONES GUICAR 2025%0A%0A`;
    msg += `Estimados, reciban un cordial saludo. Agradecemos cotización de los siguientes colores (múltiplos de 3 envases):%0A%0A`;
    
    cart.forEach(item => {
        let envases = item.cantidad;
        let cantidadTexto = formatCantidadConPaquetes(envases);
        msg += `🔹 ${item.nombre}%0A`;
        msg += `➤ ${cantidadTexto}%0A%0A`;
    });
    
    let totalEnvases = cart.reduce((s, i) => s + i.cantidad, 0);
    let totalTexto = formatCantidadConPaquetes(totalEnvases);
    msg += `📦 RESUMEN TOTAL%0A`;
    msg += `• ${totalTexto}%0A%0A`;
    msg += `✨ Gestión de Ventas: JONATHAN RANGEL%0A`;
    msg += `Quedo atento a su pronta respuesta.`;
    
    window.open(`https://wa.me/584122891366?text=${msg}`, '_blank');
}

// ============================================================
//  CATEGORÍAS CON NOMBRES COMERCIALES CORRECTOS
// ============================================================
function getCategories() {
    return [
        { id: "blackcolor", nombre: "BLACKCOLOR" },
        { id: "la-nieve", nombre: "LA NIEVE" },
        { id: "tx-oro", nombre: "Pintura Textil Premium TX Oro Color" },
        { id: "metalizados", nombre: "ORO COLOR METÁLICOS" },
        { id: "oro-color-premium", nombre: "ORO COLOR PREMIUM" }
    ];
}

// Mapeo de IDs a nombres INTERNOS (para filtrar los productos)
const categoryMap = {
    "blackcolor": "BLACKCOLOR",
    "la-nieve": "LA NIEVE",
    "tx-oro": "TX ORO",
    "metalizados": "METALIZADOS",
    "oro-color-premium": "ORO COLOR PREMIUM"
};

function renderCategories() {
    let cats = getCategories();
    let grid = document.getElementById("categoryGrid");
    grid.innerHTML = cats.map(cat => `<div class="glass-card rounded-3xl p-8 cursor-pointer flex flex-col items-center text-center group" onclick="openCategory('${cat.id}')">
                <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)]/10 transition-all duration-500">
                    <i data-lucide="droplet" class="w-8 h-8 text-white/40 group-hover:text-[var(--color-primary)] transition-colors"></i>
                </div>
                <h3 class="text-xl font-medium tracking-tight text-white mb-2">${cat.nombre}</h3>
                <p class="text-zinc-500 text-xs uppercase tracking-widest font-bold group-hover:text-[var(--color-primary)] transition-colors">Ver colores</p>
            </div>`).join("");
    lucide.createIcons();
}

function openCategory(catId) {
    // Obtener el nombre interno para filtrar
    let internalName = categoryMap[catId];
    // Obtener el nombre comercial para mostrarlo en el título
    let catData = getCategories().find(c => c.id === catId);
    let displayName = catData ? catData.nombre : internalName;
    
    currentCategory = internalName;
    document.getElementById("categoriesView").style.display = "none";
    document.getElementById("productsView").style.display = "block";
    
    let prods = products.filter(p => p.categoria === internalName);
    let html = `<div class="mb-10">
                    <h2 class="text-4xl font-light tracking-tight">${displayName} <span class="font-bold text-neon-green">Pinturas al Frío</span></h2>
                    <p class="text-neon-green text-sm md:text-base font-medium mt-1">Venta por múltiplos de 3 envases · 12 und = 1 paquete</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
    prods.forEach(p => {
        let colorCircle = `<span class="color-circle" style="background: ${p.hex};"></span>`;
        html += `<div class="glass-card p-6 rounded-3xl flex justify-between items-center group">
                            <div>
                                <h3 class="font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">${colorCircle}${escapeHtml(p.nombre)}</h3>
                                <p class="text-neon-green text-xs md:text-sm font-medium mt-1">Envase 60ml · Agregar 3 und</p>
                            </div>
                            <button onclick="addToCartById('${p.id}')" class="btn-agregar px-6 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest">AGREGAR</button>
                        </div>`;
    });
    html += `</div>`;
    document.getElementById("productsContent").innerHTML = html;
    lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCartById(pid) {
    let product = products.find(p => p.id === pid);
    if (product) addToCart(product);
}

function goBack() {
    document.getElementById("categoriesView").style.display = "block";
    document.getElementById("productsView").style.display = "none";
}

function openCart() {
    document.getElementById("cartPanel").classList.remove("closed");
    document.getElementById("cartPanel").classList.add("open");
    document.getElementById("cartOverlay").classList.remove("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    document.getElementById("cartPanel").classList.remove("open");
    document.getElementById("cartPanel").classList.add("closed");
    document.getElementById("cartOverlay").classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    loadCart();
    lucide.createIcons();
});