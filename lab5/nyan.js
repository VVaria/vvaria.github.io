particlesJS("particles-js", {
    particles: {
    number: { value: 100, density: { enable: false, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
        type: "star",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: {
        src:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fru%2Ffree-png-ymksa&psig=AOvVaw2QAHKnH9kr8bZ2C4l76dKj&ust=1589388532442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCcj-njrukCFQAAAAAdAAAAABAD",
        width: 100,
        height: 100
        }
    },
    opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
        value: 4,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
    },
    move: {
        enable: true,
        speed: 9.470220103698914,
        direction: "left",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
    },
    interactivity: {
    detect_on: "canvas",
    events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
    },
    modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
    }
    },
    retina_detect: true
});

update = function () {
    stats.begin();
    stats.end();
    requestAnimationFrame(update);
};
requestAnimationFrame(update);