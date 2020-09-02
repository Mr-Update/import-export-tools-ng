
var { Services } = ChromeUtils.import('resource://gre/modules/Services.jsm');

	Services.scriptloader.loadSubScript("chrome://mboximport/content/mboximport/utils.js", window, "UTF-8");
	Services.scriptloader.loadSubScript("chrome://mboximport/content/mboximport/hotKeyUtils.js", window, "UTF-8");
	Services.scriptloader.loadSubScript("chrome://mboximport/content/composeOverlay.js", window, "UTF-8");

function onLoad() {
	console.debug('Loads steadily subscripts');
	// window.mboximportbundle = mboximportbundle;
	// Services.console.logStringMessage(window.mboximportbundle);

WL.injectElements(`
<overlay id="composeOverlay"
xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul">

<keyset id="editorKeys">
<!-- we need to pre- populate the key elements so they will still be read by the overlay script -->
<!-- currently have to restart if modified -->
<key id="hot-key1" modifiers="" oncommand=""/>
<key id="hot-key2" modifiers="" oncommand=""/>
<key id="hot-key3" modifiers="" oncommand=""/>
<key id="hot-key4" modifiers="" oncommand=""/>
<key id="hot-key5" modifiers="" oncommand=""/>
<key id="hot-key6" modifiers="" oncommand=""/>
<key id="hot-key7" modifiers="" oncommand=""/>
<key id="hot-key8" modifiers="" oncommand=""/>
<key id="hot-key9" modifiers="" oncommand=""/>
<key id="hot-key10" modifiers="" oncommand=""/>

</keyset>


</overlay>
`);

}