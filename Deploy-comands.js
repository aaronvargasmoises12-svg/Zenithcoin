
const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Comprueba si ZENICOIN funciona')
].map(command => command.toJSON());

const rest = new REST({ version: '10' })
  .setToken(process.env.DISCORD_TOKEN);

rest.put(
  Routes.applicationCommands(process.env.CLIENT_ID),
  { body: commands }
)
  .then(() => console.log('Comando /ping registrado'))
  .catch(console.error);
