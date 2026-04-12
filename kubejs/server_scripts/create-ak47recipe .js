ServerEvents.recipes(event => {
    event.remove({ id: 'tacz:gun/ak47' });
    event.custom({
        type: "tacz:gun_smith_table_crafting",
        materials: [
            { item: { item: 'minecraft:iron_ingot' }, count: 5 },
            { item: { item: 'minecraft:oak_button' }, count: 1 },
        ],
        result: {
            type: "gun",
            id: "tacz:ak47",
            count: 1
        },

    });
});