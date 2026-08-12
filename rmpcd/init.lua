-- ##############################################################
-- ##                                                          ##
-- ## This is an example config file. Uncomment and customize  ##
-- ## to your liking. Check out the documentation for more     ##
-- ## information. https://rmpc.mierak.dev/rmpcd/              ##
-- ##                                                          ##
-- ##############################################################

---@type Config
local config = {
	-- Point rmpcd to your mpd server
	address = "127.0.0.1:6600",
}

-- Enable mpris support
config.mpris = true

-- Automatically increment play count on song change
rmpcd.install("#builtin.playcount")

-- Install last fm scrobbling builtin
-- For now you have to request an API key yourself due to LastFM's insane API
-- design https://www.last.fm/api/account/create
rmpcd.install("#builtin.lastfm"):setup({
	api_key = "ba94220a85d68a597c5569ec25e44972",
	shared_secret = "2a1a5cb107a83784b5bcc34389e1fcc0",
	update_now_playing = true,
})

-- Install notification on song change builtin
rmpcd.install("/home/and00pium/rmpcd-plugins/notify_plugin"):setup({
	debounce_delay = 1000,
})

-- Install the auto lyrics download builtin
rmpcd.install("/home/and00pium/rmpcd-plugins/lyrics_plugin"):setup({
	debounce_delay = 1000,
	lyrics_dir = "/home/and00pium/Music/lyrics",
})

return config
