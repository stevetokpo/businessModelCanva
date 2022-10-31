function One() {
    return <div>one</div>
}

ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = true
function ActualisationValeur(props) {
    for ( var c = 1; c <= 9; c += 1 ) {
        if ( !localStorage["key" + c + "-0"] ) {
            localStorage["key" + c + "-0"] = 0;
        }
    }
    for ( var ae = 1; ae <= 9; ae += 1 ) {
        document.getElementById('list_stock' + ae).innerHTML = '';
        for ( var ai = 1, ac = localStorage["key" + ae + "-0"]; ai <= ac; ai += 1 ) {
            if ( localStorage["key" + ae + "-" + ai] ) {
                
                document.getElementById('list_stock' + ae).innerHTML += '<div class="content_zone">' + localStorage["key" + ae + "-" + ai] + '<i class="mdi mdi-close-circle float-end" onclick="DelecterElement(' + ae + ', ' + ai + ');"></i></div>';
            }
        }
    }
}
function DelecterElement(tclass, telement) {
    if ( confirm('Êtes-vous sûr de vouloir supprimer cet item de la liste?') ) {
        // localStorage.removeItem('key' + tclass + '-' + telement);
        var pro = localStorage['key' + tclass + '-0'];
        for ( var free = telement; free < pro; free += 1 ) {
            var next = free + 1;
            next = localStorage['key' + tclass + '-' + next];
            localStorage['key' + tclass + '-' + free] = next;
        }
        localStorage.removeItem('key' + tclass + '-' + pro);
        localStorage['key' + tclass + '-0'] = (pro-1);
        window.location.href = './';
    }
}

function AddMoreItemBtn(props) {
    return <button className="btn btn-sm btn-dark float-end m-2" onClick={e=>{var thecontent = prompt('Veuillez entrer votre texte:'), thetarget = props.forstock ; if ( thecontent.length > 0 ) { var actual = parseInt(localStorage["key" + thetarget + "-0"]);actual += 1;localStorage["key" + thetarget + "-0"] = actual;localStorage["key" + thetarget + "-" + actual] = thecontent;document.getElementById('list_stock' + thetarget).innerHTML += '<div class="content_zone">' + thecontent + '<i class="mdi mdi-close-circle float-end" onclick="DelecterElement(' + thetarget + ', ' + actual + ');"></i></div>';}}}>+</button>
}
function ColItem(props) {
    var myid = "list_stock", myheight = props.myheight;
    myid += props.refr;
    return <div className="flex-grow-1 ps-2 pe-2" style={{borderTop:'1px solid', overflowY: 'scroll', height: myheight}}>
        <AddMoreItemBtn forstock={props.refr}/>
        <h5 className="text-primary">
            {props.texte}
        </h5>
        <div id={myid} style={{marginTop: '25px'}}>
            
        </div>
    </div>
}

function MyApp() {
    return <div>
        <div style={{margin:'15px 25px'}}>
            <div className="row" style={{height:'60vh'}}>
                <div className="col">
                    <ColItem refr="1" texte="Key Partners" myheight="60vh"/>
                </div>
                <div className="col d-flex flex-column p-0">
                    <ColItem refr="2" texte="Key Activities" myheight="30vh"/>
                    <ColItem refr="3" texte="Key Ressources" myheight="30vh"/>
                </div>
                <div className="col">
                    <ColItem refr="4" texte="Value Proposition" myheight="60vh"/>
                </div>
                <div className="col d-flex flex-column p-0">
                    <ColItem refr="5" texte="Customer Relationship" myheight="30vh"/>
                    <ColItem refr="6" texte="Channels" myheight="30vh"/>
                </div>
                <div className="col">
                    <ColItem refr="7" texte="Customer Segment" myheight="60vh"/>
                </div>
            </div>
            <div className="row" style={{height:'30vh'}}>
                <div className="col">
                    <ColItem refr="8" texte="Cost Structure" myheight="60vh"/>
                </div>
                <div className="col">
                    <ColItem refr="9" texte="Revenue Stream" myheight="60vh"/>
                </div>
            </div>
        </div>
    </div>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp/>);

const containers = document.getElementById('loader');
const loader = ReactDOM.createRoot(containers);
loader.render(<ActualisationValeur/>);
