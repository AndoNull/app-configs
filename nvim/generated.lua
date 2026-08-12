require("base16-colorscheme").setup({
	base00 = "#101418",
	base01 = "#0b0f12",
	base02 = "#181c20",
	base03 = "#42474e",
	base04 = "#c2c7cf",
	base05 = "#e0e2e8",
	base06 = "#2d3135",
	base07 = "#36393e",
	base08 = "#c5ace0",
	base09 = "#d2bfe7",
	base0A = "#b9c8da",
	base0B = "#9acbfa",
	base0C = "#4f4061",
	base0D = "#0c4a72",
	base0E = "#3a4857",
	base0F = "#98aec8",
})

vim.api.nvim_set_hl(0, "Visual", {
	bg = "#0c4a72",
	fg = "#101418",
})

vim.api.nvim_set_hl(0, "SnacksDashboardHeader", { fg = "#9acbfa" })
vim.api.nvim_set_hl(0, "SnacksDashboardIcon", { fg = "#b9c8da" })
vim.api.nvim_set_hl(0, "SnacksDashboardDesc", { fg = "#e0e2e8" })
vim.api.nvim_set_hl(0, "SnacksDashboardKey", { fg = "#d2bfe7" })
vim.api.nvim_set_hl(0, "SnacksDashboardFooter", { fg = "#8c9198" })
