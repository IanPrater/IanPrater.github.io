export default function () {
  return (
    <div style={{ border: '1px solid #ccc', flexGrow: 1, flexShrink: 0, display: 'flex'}}>

      <embed
        src="/src/assets/resume.pdf"
        // type="application/pdf"
        width={'700vw'}
        style={{flex: 1}}
        />
    </div>

  );
}