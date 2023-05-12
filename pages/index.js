import Texts from "@/app/components/modules/Texts";
import React from "react";

export default function Home() {
  return (
    <div className="kit-ui">
      <div className="container">
        <Texts />

        <div className="item">
          <div className="titles">
            <div className="title1">
              <h3 className="fs-5">Peso de fuente</h3>
            </div>
          </div>
          <hr></hr>

          <div className="text">
            <br />
            <br />
            <p className="fs-4 is-light">is-light</p> <br />
            <br />
            <p className="fs-4 is-regular">is-regular</p> <br />
            <br />
            <p className="fs-4 is-semibold">is-semibold</p>
            <br />
            <br />
            <p className="fs-4 is-bold">is-bold</p> <br />
            <br />
            <p className="fs-4 is-extrabold">is-extrabold</p> <br />
            <br />
          </div>
        </div>

        <div className="item">
          <div className="titles">
            <div className="title1">
              <h3 className="fs-5">colores</h3>
            </div>
          </div>
          <hr></hr>

          <div className="box">
            <p className="style-p is-size-2 is-bold">
              Variables Colores Explora
            </p>
            <br />
            <div className="box-1">
              <div className="color-red-1">$red-1</div>
              <div className="color-red-2">$red-2</div>
              <div className="color-red-3">$red-3</div>
              <div className="color-red-4">$red-4</div>
              <div className="color-red-5">$red-5</div>
            </div>
            <div className="box-2">
              <div className="color-yellow-1">$yellow-1</div>
              <div className="color-yellow-2">$yellow-2</div>
              <div className="color-yellow-3">$yellow-3</div>
              <div className="color-yellow-4">$yellow-4</div>
              <div className="color-yellow-5">$yellow-5</div>
            </div>

            <div className="box-3">
              <div className="color-green-1">$green-1</div>
              <div className="color-green-2">$green-2</div>
              <div className="color-green-3">$green-3</div>
              <div className="color-green-4">$green-4</div>
              <div className="color-green-5">$green-5</div>
            </div>
            <div className="box-4">
              <div className="color-orange-1">$orange-1</div>
              <div className="color-orange-2">$orange-2</div>
              <div className="color-orange-3">$orange-3</div>
              <div className="color-orange-4">$orange-4</div>
              <div className="color-orange-5">$orange-5</div>
            </div>
            <p className="style-p is-size-2 is-bold">
              Variables Colores Explora Grises
            </p>
            <div className="box-5">
              <div className="color-gray-1">$gray-1</div>
              <div className="color-gray-2">$gray-2</div>
              <div className="color-gray-3">$gray-3</div>
              <div className="color-gray-4">$gray-4</div>
              <div className="color-gray-5">$gray-5</div>
            </div>

            <div className="box-6">
              <div className="color-gray-6">$gray-6</div>
              <div className="color-gray-7">$gray-7</div>
              <div className="color-gray-8">$gray-8</div>
            </div>
          </div>
        </div>

        <div className="item">
          <h1 className="style-p is-size-1 is-bold">Variables Planetario</h1>
          <hr></hr>
          <div>
            <div className="box-7">
              <div className="color-blue-1">$blue-p1</div>
              <div className="color-blue-2">$blue-p2</div>
              <div className="color-blue-3">$blue-p3</div>
              <div className="color-blue-4">$blue-p4</div>
            </div>
            <div className="box-8">
              <div className="color-purple-1">$purple-1</div>
              <div className="color-purple-2">$purple-2</div>
              <div className="color-purple-3">$purple-3</div>
            </div>
            <div className="box-9">
              <div className="color-green-p1">$green-p1</div>
              <div className="color-yellow-p1">$yellow-p1</div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="titles">
            <div className="title1">
              <h3 className="fs-5">Botones</h3>
            </div>
          </div>

          <div className="btn-1">
            <button className="btn">BOTON 1</button>
            <button className="btn has-border-green">BOTON 2</button>
            <button className="btn is-green">BOTON 3</button>
            <button className="btn  is-yellow">BOTON 4</button>
            <button className="btn  btn-simple">BOTON 5</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {'<button className="btn-explore">BOTON 1</button>'}
              </div>
              <div className="subtitle">
                {'  <button className="btn-explore btn-red-2">BOTON 2</button>'}
              </div>

              <div className="subtitle">
                {' <button className="btn-explore btn-green">BOTON 3</button>'}
              </div>

              <div className="subtitle">
                {
                  ' <button className="btn-explore  btn-yellow">BOTON 4</button>'
                }
              </div>

              <div className="subtitle">
                {'<button className="btn-explore  btn-simple">BOTON 5</button>'}
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="btn-2">
            <button className="btn-explore btn-transparent">BOTON 6</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {
                  '<button className="btn-explore  btn-transparent">BOTON 6</button>'
                }
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="btn-3">
            <button className=" btn-explore icon-whatsapp">BOTON 7</button>
            <button className="btn-explore icon-download">BOTON 8</button>
            <button className="btn-explore icon-left">BOTON 9</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {
                  '<button className="btn-explore icon-whatsapp">BOTON 7</button>'
                }
                <br />
                <br />
                {
                  '<button className="btn-exploreicon-download">BOTON 8</button>'
                }
                <br />
                <br />
                {'<button className="btn-explore icon-left">BOTON 9</button>'}
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="btn-3">
            <button className="btn-explore ic-green">BOTON 10</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {'<button className="btn-explore ic-green">BOTON 10</button>'}
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="btn-3">
            <button className="btn-explore target">BOTON 11</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {'<button className="btn-explore target">BOTON 11</button>'}
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="btn-3">
            <button className="btn-explore hover-dark">BOTON 12</button>
            <button className="btn-explore no-icon">BOTON 13</button>
          </div>

          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {'<button className="btn-explore hover-dark">BOTON 12</button>'}{" "}
                <br></br>
                <br></br>
                {'<button className="btn-explore no-icon">BOTON 13</button>'}
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="btn-3">
            <button className="btn-planetary">BOTON 14</button>
            <button className="btn-planetary btn-blue">BOTON 15</button>
            <button className="btn-planetary btn-beige">BOTON 16</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {'<button className="btn-planetary">BOTON 14</button>'}{" "}
                <br></br>
                <br></br>
                {'<button className="btn-planetary btn-blue">BOTON 15</button>'}
                <br></br>
                <br></br>
                {
                  '<button className="btn-planetary btn-beige  ">BOTON 16</button>'
                }
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="btn-3">
            <button className="btn-planetary btn-transparent">BOTON 17</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {
                  '<button className="btn-planetary btn-transparent">BOTON 17</button>'
                }
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="btn-3">
            <button className="btn-planetary btn-target">BOTON 18</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {
                  '<button className="btn-planetary btn-target">BOTON 18</button>'
                }
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>

          <div className="btn-3">
            <button className="btn-planetary btn-target white">BOTON 19</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {
                  '<button className="btn-planetary btn-target white">BOTON 19</button>'
                }
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="btn-3">
            <button className="btn-explore is-loading">BOTON 20</button>
            <button className="btn-planetary is-loading">BOTON 21</button>
          </div>
          <div className="content">
            <div>
              <h1 className="content title">HTML</h1>
            </div>
            <div className=" content interfaz">
              <div className="subtitle">
                {'<button className="btn-explore is-loading">BOTON 20</button>'}
                <br></br>
                <br></br>
                {
                  '<button className="btn-planetary is-loading">BOTON 21</button>'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
