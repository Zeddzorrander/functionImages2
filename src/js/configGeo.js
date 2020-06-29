export const parameters = {
    "id": "ggbApplet",
    "width":800,
    "height":600,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":true,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){ 
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    "rounding":"3",
    // use this instead of ggbBase64 to load a material from geogebra.org
    //"material_id":"kNsYvNTd",
    // use this instead of ggbBase64 to load a .ggb file
    //"filename":"http://Users/Zeddzorrander/Documents/Sabbatical2020/functionImages1/GeoGebra/FunctionImages.ggb"
    "ggbBase64":"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",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

// export function ggbFunctionf(x) {
//     return 0.05 * (x + 4) * (x - 1) * (x - 5);
// };

