BlockEvents.modification(event => {
    event.modify('minecraft:obsidian', block => {
        block.explosionResistance = 8.0
    })
})