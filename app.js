require('node-self')
const http = require('http');
const express = require('express')
const cors = require('cors');
const app = express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cors());

let txt = `var _0xc68e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe33c(d,e,f){var g=_0xc68e[2][_0xc68e[1]](_0xc68e[0]);var h=g[_0xc68e[3]](0,e);var i=g[_0xc68e[3]](0,f);var j=d[_0xc68e[1]](_0xc68e[0])[_0xc68e[10]]()[_0xc68e[9]](function(a,b,c){if(h[_0xc68e[4]](b)!==-1)return a+=h[_0xc68e[4]](b)*(Math[_0xc68e[8]](e,c))},0);var k=_0xc68e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc68e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe33c(s,e,10)-t)}return decodeURIComponent(escape(r))}("wtnWOWnWEwnWWtnFEdnWWOnWWtnWFOnWOWnWWZnWWtnWEZnFEdnFdFnFEdnFFOnWFdnWOEnWOEnWWdnWWZnFOtnFWOnFWOnWOOnWOOnWOOnFWWnWOtnWOtnWOtnWOtnWOWnWWOnWFEnFWWnWEZnWWOnWWFnFWOnWFEnWWtnWEwnWWFnWEwnFWOnFOEnWFEnWFEnFOWnWEtnFOdnFOOnFOWnFOOnFWwnFOFnFWwnWEwnWEZnFOFnWFEnFWZnFWtnWFFnFOWnFWZnFOwnWFEnFWZnWFFnFWZnWEtnFOEnFOEnWEwnWEtnWEtnFWOnWFdnFWOnWOWnWFwnWFEnWFFnWWOnFWWnWWFnFWZnWOFnFOdnFFOnFOZnwtnWOWnWEwnWWtnFEdnWWOnWWtnWFOnWWZnWWZnWWtnWEZnFEdnFdFnFEdnFFOnFWOnWEwnWFtnWEwnWOdnFWOnWWZnWOFnWEtnWWZnFWWnWWdnWFdnWWdnFdOnWFwnWFEnFdFnFWwnFWdnFOFnFOOnFWZnFOWnFFWnWOFnWOEnFdFnFWwnFOWnFOdnFWwnFOWnFOEnFWZnFOFnFOwnFWdnFFOnFOZnwtnWFWnWOFnWWWnWEZnWOEnWFwnWWOnWWWnFEdnFtZnWFFnWOEnFZWnWFwnWFFnWOOnWFFnWWtnFFdnFFwnFEdnWOZnwtnWdFnwtnFFEnFFdnWOOnWFwnWWWnWFEnWWOnWOOnFFwnFWWnWWEnWWOnWEwnWFEnFFdnWFWnWOFnWWWnWEZnWOEnWFwnWWOnWWWnFFdnFFwnFEdnWOZnwtnWdFnFFwnFOZnwtnWFWnWOFnWWWnWEZnWOEnWFwnWWOnWWWnFEdnFdZnWEwnWWEnWEZnFtZnWOFnWEtnWOEnWFwnWOEnWWEnWFFnFFdnFFwnFEdnWOZnwwnWOWnWEwnWWtnFEdnWWZnWFwnWOtnWFFnWEOnWOOnFEdnFdFnFEdnFFEnFFdnFFOnFWWnWWdnWWEnWOwnWWtnFFOnFFwnFWWnWOOnWFwnWFEnWOEnWFdnFFdnFFwnFOZnwwnWOWnWEwnWWtnFEdnWWZnWFwnWOtnWFFnWEOnWFdnFEdnFdFnFEdnFFEnFFdnFFOnFWWnWWdnWWEnWOwnWWtnFFOnFFwnFWWnWFdnWFFnWFwnWFOnWFdnWOEnFFdnFFwnFOZnwwnWOWnWEwnWWtnFEdnWOEnWWFnWWdnWEOnWWtnWEwnWOEnWFwnWWOnFEdnFdFnFEdnFWdnFOZnwwnWOWnWEwnWWtnFEdnWOEnFWwnFEdnFdFnFEdnFFdnWWZnWFwnWOtnWFFnWEOnWOOnFEdnFWFnFEdnFFdnWWZnWFwnWOtnWFFnWEOnWOOnFEdnFWOnFEdnFOEnFFwnFFwnFOZnwwnWOWnWEwnWWtnFEdnWWdnWEtnFEdnFdFnFEdnFWdnFOZnwwnWOWnWEwnWWtnFEdnWFWnWWZnFEdnFdFnFEdnFWdnFOZnwwnWFwnWFWnFFdnWWZnWFwnWOtnWFFnWEOnWFdnFEdnFdWnFEdnWOEnFWwnFFwnFEdnWOZnwwnWWdnWEtnFEdnFdFnFEdnFFdnWWZnWFwnWOtnWFFnWEOnWFdnFEdnFWOnFEdnFWwnFOwnFFwnFOZnwwnWFWnWWZnFEdnFdFnFEdnFFdnWWZnWFwnWOtnWFFnWEOnWOOnFEdnFWOnFEdnFWtnFFwnFEdnFWOnFEdnFWwnFOEnFOZnwwnWdFnFEdnWFFnWWEnWWZnWFFnFEdnWOZnwwnWWdnWEtnFEdnFdFnFEdnFFdnWWZnWFwnWOtnWFFnWEOnWFdnFEdnFWOnFEdnFWtnFWwnFFwnFOZnwwnWFWnWWZnFEdnFdFnFEdnFFdnWWZnWFwnWOtnWFFnWEOnWOOnFEdnFWOnFEdnFWtnFFwnFEdnFWOnFEdnFWwnFOdnFOZnwwnWdFnwwnWFWnWWZnFEdnFFZnFdFnFEdnWWZnWOFnWEtnWWZnWFwnWOtnWFFnWWOnWFWnWFWnWWZnWFFnWOEnFOZnwwnWFWnWWZnFEdnFdFnFEdnFtFnWEwnWOEnWFdnFWWnWFWnWWEnWWOnWWOnWWtnFFdnWFWnWWZnFFwnFOZnwwnWWdnWEtnFEdnFdFnFEdnFtFnWEwnWOEnWFdnFWWnWFWnWWEnWWOnWWOnWWtnFFdnWWdnWEtnFFwnFOZnwwnWFwnWFWnFFdnWFWnWWZnFEdnFdEnFEdnFWwnFWZnFFwnFEdnWFWnWWZnFEdnFdFnFEdnFWwnFWZnFOZnwwnFFEnFFdnFFOnFWWnWWdnWWEnWOwnWWtnWEOnWEOnWEZnWEwnWWdnWOEnWFwnWWOnWWWnWWZnFFOnFFwnFWWnWEZnWWZnWWZnFFdnFFOnWWdnWEwnWFEnWFEnWFwnWWWnWFOnFWFnWEtnWWOnWOEnWOEnWWOnWWFnFFOnFWEnFEdnWWdnWEtnFEdnFFZnFEdnFFOnWWdnWOdnFFOnFFwnFOZnwwnFFEnFFdnFFOnFWWnWWdnWWEnWOwnWWtnWEOnWEOnWEZnWEwnWWdnWOEnWFwnWWOnWWWnWWZnFFOnFFwnFWWnWEZnWWZnWWZnFFdnFFOnWFWnWWOnWWWnWOEnFWFnWWZnWFwnWOtnWFFnFFOnFWEnFEdnWFWnWWZnFEdnFFZnFEdnFFOnWWdnWOdnFFOnFFwnFOZnwtnWdFnwtnWFWnWOFnWWWnWEZnWOEnWFwnWWOnWWWnFEdnWWZnWOOnWFwnWOEnWEZnWFdnWOWnFFdnWWdnWWEnWEwnWOwnWWdnFFwnFEdnWOZnwwnFFEnFFdnFFOnFWWnWWdnWWEnWOwnWWtnWEOnWEOnWEZnWEwnWWdnWOEnWFwnWWOnWWWnWWZnFFOnFFwnFWWnWFdnWOEnWWFnWWEnFFdnFFOnFFOnFFwnFOZnwwnFFEnFWWnWEwnWFtnWEwnWOdnFFdnWOZnwwnWOEnWOwnWWdnWFFnFOtnFEdnFFOnFtdnFtOnFtZnFZEnFFOnFWEnwwnWOFnWWtnWWEnFOtnFEdnFFOnFWOnWWdnWEwnWFOnWFFnFWOnWOtnWOtnWEwnWWdnWEOnWEwnWFtnWEwnWOdnWEOnWWdnWWEnWEwnWOwnWFEnWEwnWOEnWEwnFWWnWWdnWFdnWWdnFFOnFWEnwwnWFEnWEwnWOEnWEwnFOtnFEdnWOZnwwnFFOnWOtnWOtnWEOnWFwnWFEnFFOnFOtnFEdnFOwnFOOnFWdnFOwnFWEnwwnFFOnWWEnWEwnWWZnWOEnWWdnWWEnWEwnWOwnFFOnFOtnFEdnWWdnWWEnWEwnWOwnWWdnwwnWdFnFWEnwwnWEZnWEwnWEZnWFdnWFFnFOtnFEdnWFWnWEwnWWEnWWZnWFFnFWEnwwnWEwnWWZnWOwnWWWnWEZnFOtnFEdnWFWnWEwnWWEnWWZnWFFnFWEnwwnWWZnWOFnWEZnWEZnWFFnWWZnWWZnFOtnFEdnWFWnWOFnWWWnWEZnWOEnWFwnWWOnWWWnFFdnWFEnWEwnWOEnWEwnFFwnFEdnWOZnwwnWdFnwwnWdFnFFwnFOZnwwnFFEnFWWnWEwnWFtnWEwnWOdnFFdnWOZnFEdnWOEnWOwnWWdnWFFnFOtnFFOnWWdnWWOnWWZnWOEnFFOnFWEnwwnWFEnWEwnWOEnWEwnFEdnFOtnFEdnWOZnwwnFFOnWOtnWOtnWEOnWFwnWFEnFFOnFEdnFOtnFEdnFOwnFOOnFWdnFOwnFWEnwwnFFOnWWFnWEZnWWWnWOEnFFOnFEdnFOtnFEdnWWdnWWEnWEwnWOwnWWdnwwnWdFnFWEnFEdnWOFnWWtnWWEnFOtnFFOnFWOnWEwnWFtnWEwnWOdnFWOnWEwnWFtnWEwnWOdnWEOnWWWnWFFnWOdnWOEnWFFnWWdnWFwnFWWnWWdnWFdnWWdnFFOnFWEnFEdnWFEnWEwnWOEnWEwnFZEnWOwnWWdnWFFnFOtnFFOnWFtnWWZnWWOnWWWnFFOnFWEnFEdnWWZnWOFnWEZnWEZnWFFnWWZnWWZnFOtnWFWnWOFnWWWnWEZnWOEnWFwnWWOnWWWnFFdnWFEnWEwnWOEnWEwnFFwnWOZnFEdnWOWnWEwnWWtnFEdnWWZnWWZnWWtnWEZnFEdnFdFnFEdnFFOnFWOnWEwnWFtnWEwnWOdnFWOnWWZnWOFnWEtnWWZnFWWnWWdnWFdnWWdnFdOnWFwnWFEnFdFnFFOnFEdnFFZnFEdnWFEnWEwnWOEnWEwnFWWnWWZnWOFnWEtnWFwnWFEnFOZnFEdnWOWnWEwnWWtnFEdnWOWnWWZnWWtnWEZnFEdnFdFnFEdnWFEnWEwnWOEnWEwnFWWnWOWnWWZnWWtnWEZnFOZnwwnWFwnWFWnFEdnFFdnFEwnFwdnWWEnWWZnFWWnWFwnWWZnFtZnWOFnWWdnWWdnWWOnWWtnWOEnWFFnWFEnFFdnFFwnFFwnFEdnWOZnwwnFFEnFFdnFFOnFEZnWWZnWOFnWEtnWWZnFFOnFFwnFWWnWEwnWOEnWOEnWWtnFFdnFFOnWWZnWWtnWEZnFFOnFWEnFEdnWWZnWWZnWWtnWEZnFFwnFOZnwwnWOWnWFwnWFEnWFFnWWOnFWWnWWZnWWtnWEZnFEdnFdFnFEdnWOWnWWZnWWtnWEZnFOZnwwnWdFnFEdnWFFnWWEnWWZnWFFnFEdnWOZnwwnFFEnFFdnFFOnFEZnWWZnWOFnWEtnWWZnFFOnFFwnFWWnWEwnWOEnWOEnWWtnFFdnFFOnWWZnWWtnWEZnFFOnFWEnFEdnWWZnWWZnWWtnWEZnFFwnFOZnwwnWOOnWFwnWWWnWFEnWWOnWOOnFWWnWFdnWWEnWWZnFEdnFdFnFEdnWWWnWFFnWOOnFEdnFwdnWWEnWWZnFFdnWFdnWWEnWWZnFdZnWWOnWWWnWFWnWFwnWFOnFFwnFOZnwwnWOOnWFwnWWWnWFEnWWOnWOOnFWWnWFdnWWEnWWZnFWWnWWEnWWOnWEwnWFEnFtZnWWOnWOFnWWtnWEZnWFFnFFdnWOWnWWZnWWtnWEZnFFwnFOZnwwnWOOnWFwnWWWnWFEnWWOnWOOnFWWnWFdnWWEnWWZnFWWnWEwnWOEnWOEnWEwnWEZnWFdnFtFnWFFnWFEnWFwnWEwnFFdnWOWnWFwnWFEnWFFnWWOnFFwnFOZnwwnWFdnWWEnWWZnFWWnWWOnWWWnFFdnFwdnWWEnWWZnFWWnFwFnWOWnWFFnWWWnWOEnWWZnFWWnFtFnFdwnFtWnFwwnFwWnFwFnFtZnFZEnWEOnFtdnFdwnFttnFtZnFwFnFwEnFWEnWFWnWOFnWWWnWEZnWOEnWFwnWWOnWWWnFFdnFFwnFEdnWOZnwwnWOWnWFwnWFEnWFFnWWOnFWWnWWdnWWEnWEwnWOwnFFdnFFwnFOZnwwnWOOnWFwnWWWnWFEnWWOnWOOnFWWnWWdnWWEnWEwnWOwnWFFnWWtnFWWnWWZnWFFnWOEnWOFnWWdnFFdnWOWnWFwnWFEnWFFnWWOnFFwnFOZnwwnWdFnFFwnFOZnwwnWdFnFEdnWdFnwwnWdFnFFwnFOZnwtnWdFnwtn",68,"EFWOdwtZn",36,8,49))
`
function EvalDecode(source) {
    self._eval = self.eval;
    self.eval = (_code) => {
        self.eval = self._eval;
        return _code;
    };
    return self._eval(source);
}
app.get('/', function (req, res) {
    res.end("HI");
})
app.get('/get', function (req, res) {
    const q = req.query.u
    //console.log(q)
    const t = EvalDecode(q)
    let _t = t.split("orgvsrc = '")[1].split("'")[0]
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(_t);
})
app.post("/", (req, res) => {
    console.log("post!");
    let body = "";
    req.on("data", function (data) {
      body = body + data;
    });
    req.on("end", function() {
      let postInfo = body;
      const t = EvalDecode(postInfo)
      let url = t.split("orgvsrc = '")[1].split("'")[0]
      let srt = t.split("orgssrc = '")[1].split("'")[0]
      res.send({url:url,srt:srt})
    })
  });
app.post("/nunu", (req, res) => {
    console.log("post!");
    let body = "";
    req.on("data", function (data) {
      body = body + data;
    });
    req.on("end", function() {
      let postInfo = body;
      const t = EvalDecode(postInfo)
      let url = t.split('source: "')[1].split('"')[0]
      
      res.send({url:url})
    })
  });
app.listen(3000)
