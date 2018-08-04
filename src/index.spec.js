import { expect } from "chai";
import Course from "./index";
import fs from "fs";
import jsdom from "jsdom";

describe('Out first test', ()=>{
  it('should pass',()=>{
    expect(Course.get()).to.equal('$1,000.00');
  });
});

describe('index.html',()=>{
  it('should say hello',(done)=>{
    const index = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index,function (err,window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello Pavel!');
      done();
      window.close();
    });
  });
});
