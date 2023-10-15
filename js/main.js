document.addEventListener("DOMContentLoaded", ()=> {
    document.addEventListener("mousemove", e=> {
        Object.assign(document.documentElement, {
            style:`
                --move-x: ${e.clientX * -0.002}deg;
                --move-y: ${e.clientY * -0.002}deg;
            `
        })
    });
});