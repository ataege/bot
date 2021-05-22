import { Guild } from 'discord.js';
import { RunEventFunction } from '../../../lib/interfaces/Event';
import Server from '../../../lib/models/Server';

// @ts-ignore
export const run: RunEventFunction = async (client, guild: Guild) => {
	await Server.create({ id: guild.id });
};

export const name = 'guildCreate';
