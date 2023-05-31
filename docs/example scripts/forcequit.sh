#!/bin/bash

# Set the app name
app_name="ninja-player"

# Get the current time
current_time=$(date +%s)

# Set the desired time for the kill and reboot (4 am)
desired_time=$(date -j -f "%H:%M" "04:00" +%s)

# Calculate the time difference until the desired time
time_diff=$((desired_time - current_time))

# Sleep until the desired time (4 am)
sleep $time_diff

# Check if the app is running
if pgrep -xq "$app_name"; then
    # Force kill the app
    pkill -9 "$app_name"
fi

# Reboot the Mac
/sbin/shutdown -r now