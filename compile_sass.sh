#!/bin/bash

# Function to convert .scss files to .css
convert_scss_to_css() {
  for file in "$1"/*; do
    if [ -d "$file" ]; then
      if [[ "$file" != *"node_modules"* ]]; then
        convert_scss_to_css "$file"
      fi
    elif [ -f "$file" ] && [ "${file: -5}" == ".scss" ]; then
      scss_file="${file}"
      css_file="${scss_file%.scss}.css"
      npx sass "$scss_file" "$css_file"
    fi
  done
}

# Starting directory
start_dir="."

# Call function to convert .scss files
convert_scss_to_css "$start_dir"
