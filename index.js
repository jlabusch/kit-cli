const kit = require('node-kit'),
      fs = require('fs');

const uid = parseInt(process.argv[process.argv.length - 3]),
      gid = parseInt(process.argv[process.argv.length - 2]),
      input_file = process.argv[process.argv.length - 1],
      output_file = input_file.replace('.kit', '.html'),
      output_path = `/opt/output/${output_file}`,
      html = kit(`/opt/input/${input_file}`);

fs.writeFile(output_path, html, (err) => {
    if (err){
        console.error(err);
        process.exit(1);
    }else{
        console.log(`    ${output_file}`);
        fs.chown(output_path, uid, gid, (err) => {
            if (err){
                console.error(err);
                process.exit(1);
            }
        });
    }
});
