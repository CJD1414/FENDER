import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoBox(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={erbLocations}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.name} />}
    />
  );
}

const erbLocations = [
  { label: "ERB 100", code: "ERB100" },
  { label: "ERB 101", code: "ERB101" },
  { label: "ERB 102", code: "ERB102" },
  { label: "ERB 103", code: "ERB103" },
  { label: "ERB 104", code: "ERB104" },
  { label: "ERB 105A", code: "ERB105A" },
  { label: "ERB 105B", code: "ERB105B" },
  { label: "ERB 106", code: "ERB106" },
  { label: "ERB 107", code: "ERB107" },
  { label: "ERB 120", code: "ERB120" },
  { label: "ERB 122", code: "ERB122" },
  { label: "ERB 123", code: "ERB123" },
  { label: "ERB 124A", code: "ERB124A" },
  { label: "ERB 124B", code: "ERB124B" },
  { label: "ERB 125A", code: "ERB125A" },
  { label: "ERB 125B", code: "ERB125B" },
  { label: "ERB 126A", code: "ERB126A" },
  { label: "ERB 126B", code: "ERB126B" },
  { label: "ERB 127A", code: "ERB127A" },
  { label: "ERB 127B", code: "ERB127B" },
  { label: "ERB 128", code: "ERB128" },
  { label: "ERB 129A", code: "ERB129A" },
  { label: "ERB 129B", code: "ERB129B" },
  { label: "ERB 130A", code: "ERB130A" },
  { label: "ERB 130B", code: "ERB130B" },
  { label: "ERB 131A", code: "ERB131A" },
  { label: "ERB 131B", code: "ERB131B" },
  { label: "ERB 132A", code: "ERB132A" },
  { label: "ERB 132B", code: "ERB132B" },
  { label: "ERB 181", code: "ERB181" },
  { label: "ERB 182", code: "ERB182" },
  { label: "ERB 183", code: "ERB183" },
  { label: "ERB 184", code: "ERB184" },
  { label: "ERB 185", code: "ERB185" },
  { label: "ERB 186", code: "ERB186" },
  { label: "ERB 187", code: "ERB187" },
  { label: "ERB 188", code: "ERB188" },
  { label: "ERB 189", code: "ERB189" },
  { label: "ERB 201", code: "ERB201" },
  { label: "ERB 202", code: "ERB202" },
  { label: "ERB 203", code: "ERB203" },
  { label: "ERB 204", code: "ERB204" },
  { label: "ERB 205", code: "ERB205" },
  { label: "ERB 206", code: "ERB206" },
  { label: "ERB 207", code: "ERB207" },
  { label: "ERB 208X", code: "ERB208X" },
  { label: "ERB 208Y", code: "ERB208Y" },
  { label: "ERB 220A", code: "ERB220A" },
  { label: "ERB 220B", code: "ERB220B" },
  { label: "ERB 225", code: "ERB225" },
  { label: "ERB 226", code: "ERB226" },
  { label: "ERB 228A", code: "ERB228A" },
  { label: "ERB 228B", code: "ERB228B" },
  { label: "ERB 244", code: "ERB244" },
  { label: "ERB 273A", code: "ERB273A" },
  { label: "ERB 273B", code: "ERB273B" },
  { label: "ERB 276", code: "ERB276" },
  { label: "ERB 277", code: "ERB277" },
  { label: "ERB 278", code: "ERB278" },
  { label: "ERB 279A", code: "ERB279A" },
  { label: "ERB 279B", code: "ERB279B" },
  { label: "ERB 280A", code: "ERB280A" },
  { label: "ERB 280B", code: "ERB280B" },
  { label: "ERB 281", code: "ERB281" },
  { label: "ERB 282", code: "ERB282" },
  { label: "ERB 283", code: "ERB283" },
  { label: "ERB 301", code: "ERB301" },
  { label: "ERB 312", code: "ERB312" },
  { label: "ERB 313A", code: "ERB313A" },
  { label: "ERB 313B", code: "ERB313B" },
  { label: "ERB 315", code: "ERB315" },
  { label: "ERB 316", code: "ERB316" },
  { label: "ERB 335A", code: "ERB335A" },
  { label: "ERB 335B", code: "ERB335B" },
  { label: "ERB 335C", code: "ERB335C" },
  { label: "ERB 370", code: "ERB370" },
  { label: "ERB 373A", code: "ERB373A" },
  { label: "ERB 373B", code: "ERB373B" },
  { label: "ERB 374A", code: "ERB374A" },
  { label: "ERB 374B", code: "ERB374B" },
  { label: "ERB 376A", code: "ERB376A" },
  { label: "ERB 376B", code: "ERB376B" },
  { label: "ERB 377A", code: "ERB377A" },
  { label: "ERB 377B", code: "ERB377B" },
  { label: "ERB 378", code: "ERB378" },
  { label: "ERB 379A", code: "ERB379A" },
  { label: "ERB 379B", code: "ERB379B" },
  { label: "ERB 380A", code: "ERB380A" },
  { label: "ERB 380B", code: "ERB380B" },
  { label: "ERB 382A", code: "ERB382A" },
  { label: "ERB 382B", code: "ERB382B" },
  { label: "ERB 401", code: "ERB401" },
  { label: "ERB 412", code: "ERB412" },
  { label: "ERB 413A", code: "ERB413A" },
  { label: "ERB 413B", code: "ERB413B" },
  { label: "ERB 414A", code: "ERB414A" },
  { label: "ERB 414B", code: "ERB414B" },
  { label: "ERB 435A", code: "ERB435A" },
  { label: "ERB 435B", code: "ERB435B" },
  { label: "ERB 470", code: "ERB470" },
  { label: "ERB 473", code: "ERB473" },
  { label: "ERB 474A", code: "ERB474A" },
  { label: "ERB 474B", code: "ERB474B" },
  { label: "ERB 475", code: "ERB475" },
  { label: "ERB 476A", code: "ERB476A" },
  { label: "ERB 476B", code: "ERB476B" },
  { label: "ERB 479", code: "ERB479" },
  { label: "ERB 480", code: "ERB480" },
  { label: "ERB 481", code: "ERB481" },
  { label: "ERB 482", code: "ERB482" },
  { label: "ERB 483A", code: "ERB483A" },
  { label: "ERB 483B", code: "ERB483B" },
  { label: "ERB 501", code: "ERB501" },
  { label: "ERB 512", code: "ERB512" },
  { label: "ERB 513A", code: "ERB513A" },
  { label: "ERB 513B", code: "ERB513B" },
  { label: "ERB 514A", code: "ERB514A" },
  { label: "ERB 514B", code: "ERB514B" },
  { label: "ERB 562", code: "ERB562" },
  { label: "ERB 570A", code: "ERB570A" },
  { label: "ERB 570B", code: "ERB570B" },
  { label: "ERB 5C3", code: "ERB5C3" },
  { label: "ERB 5C4", code: "ERB5C4" },
  { label: "ERB 640AA", code: "ERB640AA" },
  { label: "ERB 640AB", code: "ERB640AB" },
  { label: "ERB 670A", code: "ERB670A" },
  { label: "ERB 670B", code: "ERB670B" },
  { label: "ERB 6C2", code: "ERB6C2" },
  { label: "ERB 6C4", code: "ERB6C4" },
]
