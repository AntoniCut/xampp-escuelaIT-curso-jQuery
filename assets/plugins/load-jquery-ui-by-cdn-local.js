//  ---------- --------------------------------------------
//  ----------  /load-jquery-ui-by-cdn-local.js  ----------
//  ---------- --------------------------------------------


export function loadJQueryUIByCdnOLocal(srcCdn, integrity, crossOrigin, referrerPolicy, srcLocal) {
    
    return new Promise((resolve, reject) => {
        
        const script = document.createElement("script");
        script.src = srcCdn;
        script.integrity = integrity;
        script.crossOrigin = crossOrigin;
        script.referrerPolicy = referrerPolicy;
        
        script.onload = () => {
            
            if (window.jQuery && jQuery.ui) 
                resolve(jQuery);
            
            else 
                reject(new Error("jQuery UI no cargado desde CDN"));
            
        };
        
        script.onerror = () => {
            
            console.warn("Error al cargar jQuery UI desde CDN. Intentando cargar localmente...");
            
            const localScript = document.createElement("script");
            localScript.src = srcLocal;
            localScript.onload = () => resolve(jQuery);
            localScript.onerror = () => reject(new Error("Error al cargar jQuery UI localmente"));
            
            document.head.appendChild(localScript);

        };
        
        document.head.appendChild(script);

    });
}
