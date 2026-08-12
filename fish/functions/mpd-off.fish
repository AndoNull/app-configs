function mpd-off --description 'Stop mpd and rmpcd'
    pkill -f 'rmpcd$'
    systemctl --user stop mpd
    echo "mpd + rmpcd detenidos"
end
