import { writable } from 'svelte/store';
export const _lorem = writable({
    ptag: true,
    itag: false,
    count: 1,
    head: null,
    det1: true,
    det2: false
});
export const loremdata = () => [
    {
        slug: "",
        quote: "",
        ref: "",
        file: ""
    },
    {
        slug: "Django Unchained",
        quote: "D-J-A-N-G-O . . .  The D is silent.",
        ref: "Django from Django Unchained",
        file: "https://nwp-cgn.de/img/hsp/tarantino/django_unchained_1.jpg"
    },
    {
        slug: "Hateful Eight",
        quote: "Oh, you believe in Jesus now, huh, bitch? Good, ’cause you ’bout to meet him!",
        ref: "Major Marquis Warren from The Hateful Eight",
        file: "https://nwp-cgn.de/img/hsp/tarantino/hateful_eight_1.jpg"
    },
    {
        slug: "Inglourious Basterds I",
        quote: "You know somethin’, Utivich? I think this just might be my masterpiece!",
        ref: "Lt. Aldo Raine from Inglourious Basterds",
        file: "https://nwp-cgn.de/img/hsp/tarantino/inglourious_basterds_1.jpg"
    },
    {
        slug: "Inglourious Basterds II",
        quote: "I’m gonna give you a little somethin’ you can’t take off.",
        ref: "Lt. Aldo Raine from Inglourious Basterds",
        file: "https://nwp-cgn.de/img/hsp/tarantino/inglourious_basterds_2.jpg"
    },
    {
        slug: "Jackie Brown",
        quote: "AK-47. The very best there is. When you absolutely, positively got to kill every motherfucker in the room, accept no substitutes.",
        ref: "Ordell Robbie from Jackie Brown",
        file: "https://nwp-cgn.de/img/hsp/tarantino/jackie_brown_1.jpg"
    },
    {
        slug: "Kill Bill Vol. 1",
        quote: "That woman deserves her revenge and we deserve to die. She must suffer till her last breath.",
        ref: "Budd and Elle Driver from Kill Bill Vol. 1",
        file: "https://nwp-cgn.de/img/hsp/tarantino/kill_bill_1.jpg"
    },
    {
        slug: "Pulp Fiction I",
        quote: "Say ‘what’ again. Say ‘what’ again, I dare you, I double dare you motherfucker, say what one more Goddamn time!",
        ref: "Jules Winnfield from Pulp Fiction",
        file: "https://nwp-cgn.de/img/hsp/tarantino/pulp_fiction_1.jpg"
    },
    {
        slug: "Pulp Fiction II",
        quote: "Ain’t no fuckin’ ballpark neither. Now look, maybe your method of massage differs from mine, but, you know, touchin’ his wife’s feet, and stickin’ your tongue in her Holiest of Holies, ain’t the same fuckin’ ballpark, it ain’t the same league, it ain’t even the same fuckin’ sport. Look, foot massages don’t mean shit.",
        ref: "Jules Winnfield from Pulp Fiction",
        file: "https://nwp-cgn.de/img/hsp/tarantino/pulp_fiction_2.jpg"
    },
    {
        slug: "Pulp Fiction III",
        quote: "That’s a pretty fucking good milkshake. I don’t know if it’s worth five dollars but it’s pretty fucking good.",
        ref: "Vincent Vega from Pulp Fiction",
        file: "https://nwp-cgn.de/img/hsp/tarantino/pulp_fiction_3.jpg"
    },
    {
        slug: "Pulp Fiction IV",
        quote: "I hid this uncomfortable piece of metal up my ass for two years. Then, after seven years, I was sent home to my family. And now, little man, I give the watch to you.",
        ref: "Captain Koons from Pulp Fiction",
        file: "https://nwp-cgn.de/img/hsp/tarantino/pulp_fiction_4.jpg"
    },
    {
        slug: "Reservoir Dogs I",
        quote: "Do you know what this is? It’s the world’s smallest violin playing just for the waitresses.",
        ref: "Mr. Pink from Reservoir Dogs",
        file: "https://nwp-cgn.de/img/hsp/tarantino/reservoir_dogs_1.jpg"
    },
    {
        slug: "Reservoir Dogs II",
        quote: "FUCK YOU! FUCK YOU! I’M FUCKIN’ DYING HERE! I’M FUCKIN’ DYING!",
        ref: "Mr. Orange from Reservoir Dogs",
        file: "https://nwp-cgn.de/img/hsp/tarantino/reservoir_dogs_2.jpg"
    }
];
export const randomNumb = (quant, max = 12) => {
    const set = new Set()
    while (set.size < quant) {
        set.add(Math.floor(Math.random() * max) + 1)
    }
    let arr = Array.from(set)
    return arr;
};
export const cogIco = `
<svg style="width: 32px; height: 32px;"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg>
`;
export const codeIco = `
<svg style="width: 24px; height: 24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
</svg>
`;
export const prevIco = `
<svg style="width: 24px; height: 24px;"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
</svg>
`;
export const savIco = `
<svg style="width: 24px; height: 24px;"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 17m-7-5l3-3m0 0l3 3m-3-3v12"/>
</svg>
`;
export const loadIco = `
<svg style="width: 24px; height: 24px;"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10"/>
</svg>
`;
export const resetIco = `
<svg style="width: 24px; height: 24px;"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
</svg>
`;
export const genIco = `
<svg style="width: 24px; height: 24px;"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
</svg>
`;
