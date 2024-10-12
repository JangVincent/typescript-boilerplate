async function main() {
  
}

main()
  .then(async () => {
    console.log('done');
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
