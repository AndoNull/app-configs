function clear-cache --wraps='sudo rm -rf /var/cache/pacman/pkg/download-*' --description 'alias clear-cache=sudo rm -rf /var/cache/pacman/pkg/download-*'
    sudo rm -rf /var/cache/pacman/pkg/download-* $argv
end
