return {
  {
    "iamcco/markdown-preview.nvim",
    cmd = { "MarkdownPreviewToggle", "MarkdownPreview", "MarkdownPreviewStop" },
    ft = { "markdown" },
    build = function()
      vim.fn["mkdp#util#install"]()
    end,
    -- Es recomendable añadir esto para que Neovim reconozca el plugin
    init = function()
      vim.g.mkdp_filetypes = { "markdown" }
    end,
  },
}
