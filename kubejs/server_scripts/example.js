/*
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing".
 */

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    event.remove({ id: 'create:crafting/appliances/netherite_diving_helmet' })
    event.remove({ id: 'create:crafting/appliances/netherite_diving_boots' })
    event.remove({ id: 'create:crafting/appliances/netherite_backtank' })
    event.shaped(
        Item.of('minecraft:saddle', 1),
                 [
                    'AAA',
                    'BCB',
                    '   '
                 ],
                 {
                    A: 'minecraft:leather',
                    B: 'minecraft:tripwire_hook',
                    C: 'minecraft:iron_ingot'
                 }
    )
    event.recipes.create.crushing([Item.of('create:cinder_flour').withChance(0.1), Item.of('minecraft:blackstone').withChance(0.9)], 'minecraft:blackstone')
        event.recipes.create.crushing(['create:empty_blaze_burner', '2x blaze_powder', Item.of('1x minecraft:blaze_rod').withChance(0.1), Item.of('minecraft:blaze_powder').withChance(0.5)], 'create:blaze_burner')
    event.shapeless( Item.of('minecraft:netherrack', 1), '4x create:cinder_flour')
    console.log('Server KubeJS recipes (re)loaded!')
})
