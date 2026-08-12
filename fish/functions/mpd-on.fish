function mpd-on --description 'Start mpd and rmpcd'
    systemctl --user start mpd
    rmpcd &
    disown
    echo "mpd + rmpcd iniciados"
end
