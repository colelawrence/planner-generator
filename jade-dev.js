#!/usr/bin/env node
var fs = require('fs')
  , http = require('http')
  , jade = require('jade')
  , static = require('node-static')
  , moment = require('moment')
  , pathUtil =require('path')
  , jadeRe = /\.jade$/
  , path = process.argv.slice(2)[0]
  , port = parseInt(process.argv.slice(2)[1]) || 8080
  , fileServer = new static.Server(path || '.')

if (path)
  process.chdir(pathUtil.resolve(path));

fileServer.serveDir = function (pathname, req, res, finish) {
  fs.readdir(pathname, function(err, results) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(jade.render('pre\n if pathname.length\n  a(href="../") ..\n  br\n each file in results\n  a(href=pathname+"\/"+file)=file\n  br', {
      results: results,
      pathname: req.url.length === 1 ? '' : req.url
    }))
    finish(200, {})
  })
}

http.createServer(function (req, res) {
  if (req.url.match(jadeRe)) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    try {
      res.end(jade.renderFile('.' + req.url, {
        filename: '.' + req.url.replace(jadeRe, ''),
        moment: moment,
        pretty: true
      }))
    } catch (parseError) {
      res.end('<pre>' + parseError + '</pre>')
    }
  } else {
    req.addListener('end', function () {
      fileServer.serve(req, res)
    }).resume()
  }
}).listen(port)
