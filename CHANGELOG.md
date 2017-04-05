### 1.0.1 (April 5, 2017)
#### :bug: Bug Fix

* Fix issue with the files property in `package.json` not being properly formatted

  This lead to issues with thi bin files not following along durin `npm install`.

### 1.0.0 (April 5, 2017)

#### :rocket: New Feature
* `transfr` is released

  `transfr` is a Node based CLI to upload files using [transfer.sh](https://transfr.sh/).
  Basic usage:

  ```sh
  $ transfr cat.jpg
  ```

  This will result in the cat image being uploaded to Transfr and the link will both be printed on the terminal as well as copied to your clipboard.
