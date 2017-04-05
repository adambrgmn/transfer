## 1.1.0 (April 6, 2017)
#### :nail_care: Enhancement

* Add ability to upload several files at once

  Now it is possible to do `transfr cat1.png cat2.png`. This will bundle the files into a zip file and upload it to [transfer.sh](https://transfr.sh/).

## 1.0.1 (April 5, 2017)
#### :bug: Bug Fix

* Fix issue with the files property in `package.json` not being properly formatted

  This lead to issues with thi bin files not following along during `npm install`.

## 1.0.0 (April 5, 2017)

#### :rocket: New Feature
* `transfr` is released

  `transfr` is a Node based CLI to upload files using [transfer.sh](https://transfr.sh/).
  Basic usage:

  ```sh
  $ transfr cat.jpg
  ```

  This will result in the cat image being uploaded to transfer.sh and the link will both be printed on the terminal as well as copied to your clipboard.
