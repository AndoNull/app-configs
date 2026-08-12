function restore-lock
    hyprctl --instance 0 eval 'hl.dispatch(hl.dsp.global("quickshell:lock"))'
end
