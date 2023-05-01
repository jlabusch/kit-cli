# NAME

kit-cli.sh

# SYNOPSIS

    kit-cli.sh [--source SRC_DIR] [--dest DEST_DIR] [--test TEST_DIR] [--all|FILE ...]

# DESCRIPTION

Command-line compiler for CodeKit `.kit` files.

Use `--source SRC_DIR` to specify the root directory of your source code; all of your "include" files
references in your `.kit` files need to be within this tree.

Each FILE should be specified relative to `SRC_DIR`, e.g. if the absolute path is `~/src/website/index.kit`
then you probably want to run

    kit-cli.sh --source ~/src/website index.kit

Alternatively, you can process all `.kit` files recursively in a particular source tree with

    kit-cli.sh --source ~/src/website --all

The default value of `SRC_DIR` is `$PWD`.

Use the `--dest DEST_DIR` option if you want to save the compiled HTML files to a different place
rather than having them alongside the source files.

So extending the example above, if you want to separate your source files and build files
you probably want an invocation like

    kti-cli.sh --source ~/src/website/source --dest ~/src/website/build --all

Input file `$SRC_DIR/foo/bar.kit` will be saved to `$DEST_DIR/foo/bar.html`.

The default value of `DEST_DIR` is `$SRC_DIR`.

If you want to compare your output against something generated by CodeKit, use
`--test DIR` to point to that directory full of model HTML we should compare our
output against. The comparison is done using `diff -Bw` to ignore whitespace.

# DEPENDENCIES

 - Uses Docker; build the Docker image with `make` or `make clean build`.
 - Depends on [node-kit](https://github.com/jeremyworboys/node-kit)
