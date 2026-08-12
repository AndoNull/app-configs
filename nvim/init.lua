-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

local function source_matugen()
  local matugen_path = os.getenv("HOME") .. "/.config/nvim/generated.lua"
  local file, err = io.open(matugen_path, "r")
  if err ~= nil then
    vim.cmd("colorscheme base16-catppuccin-mocha")
  else
    dofile(matugen_path)
    io.close(file)
  end
end

vim.api.nvim_create_autocmd("Signal", {
  pattern = "SIGUSR1",
  callback = function()
    source_matugen()
  end,
})

source_matugen()
