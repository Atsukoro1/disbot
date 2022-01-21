import { Member } from "./Member";
import { Channel } from "./Channel";
export declare class Guild {
    id: string;
    name: string;
    icon?: string;
    icon_hash?: string;
    splash?: string;
    discovery_splash?: string;
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    region?: string;
    afk_channel_id: string;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: Array<object>;
    emojis: Array<object>;
    features: Array<object>;
    mfa_level: number;
    application_id: string;
    system_channel_id: string;
    system_channel_flags: number;
    rules_channel_id: number;
    joined_at?: string;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    voice_states?: Array<object>;
    members?: Array<Member>;
    channels?: Array<Channel>;
    threads?: Array<object>;
    presences?: Array<object>;
    max_presences?: Array<object>;
    max_members?: number;
    vanity_url_code: string;
    description: string;
    banner: string;
    premium_tier: number;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id: string;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: object;
    nsfw_level: number;
    stage_instances?: Array<object>;
    stickers?: Array<object>;
    guild_scheduled_events?: Array<object>;
    premium_progress_bar_enabled: boolean;
    constructor(data: any);
    /**
     * Fetch guild
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.get("482913781983712939");
     * @returns {Guild | boolean}
     */
    get(params: string | undefined): Promise<Guild | boolean>;
    /**
     * Fetch guild previes
     * @param {string} [id] - If of the guild you want to fetch, if empty the guild will be fetched from message guild id
     * @example const fetchedGuild = await message.guild.getGuildPreview("482913781983712939");
     * @returns {Guild | boolean}
     */
    getGuildPreview(params: string | undefined): Promise<Guild | boolean>;
    modify(params: object): Promise<void>;
}
