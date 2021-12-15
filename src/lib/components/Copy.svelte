<script>
    import CopyToClipboard from "svelte-copy-to-clipboard";
    let exampleText = 'Copy me!';
  
    const handleSuccessfullyCopied = (e) => {
        alert(`successfully copied to clipboard! ${e}`);
    }
  
    const handleFailedCopy = () => {
        alert('failed to copy :(');
    }
  </script>
  
  <CopyToClipboard text={exampleText} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
        <button class="btn btn-blue" on:click={copy}>Copy Content</button>
  </CopyToClipboard>