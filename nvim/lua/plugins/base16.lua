-- To disable highlights for supported plugin(s), call the `with_config` function **before** setting the colorscheme.
-- These are the defaults.
return {
  "RRethy/base16-nvim",
  lazy = false,
  priority = 1000,
  config = function()
    require("base16-colorscheme").with_config({
      telescope = false,
      indentblankline = true,
      notify = true,
      cmp = true,
      illuminate = true,
      dapui = true,
    })
  end,
}
