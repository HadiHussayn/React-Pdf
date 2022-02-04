import "./LayoutSample.css";
import KendokaLogo from "../../assets/kendoka-logo.svg";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartLegend,
} from "@progress/kendo-react-charts";
import "hammerjs";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import CHARTKEYS from "../../utils/chartData.json";
import KEYS from "../../utils/nameVariables.json";
import { useRef, useState } from "react";
import Table from "../../components/Elements/Table/Table";
import Input from "../../components/Elements/Inputs/Input";
import Text from "../../components/Elements/text/Text";
import Hr from "../../components/Elements/hr/hr";
import TempletHeader from "../../components/Elements/header/templetheader";
import Fotter from "../../components/Elements/fotter/fotter";

function LayoutSample() {
  const [values, setValues] = useState({});
  const [widthh, setWidthh] = useState({});

  const setValue = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const [generalOverview, setGeneralOverview] = useState([
    {
      col: [
        {
          value: "Equipment Nr:",
        },
        {
          value: (
            <Input
              height
              block
              name="eN"
              onChange={setValue}
              value={values.eN}
            />
          ),
        },
        {
          value: (
            <Chart
              style={{ height: "150px", position: "absolute", left: 0, top: 0 }}
            >
              <ChartSeries>
                <ChartSeriesItem
                  type="donut"
                  data={CHARTKEYS}
                  categoryField="product"
                  field="share"
                >
                  <ChartSeriesLabels color="#fff" background="none" />
                </ChartSeriesItem>
              </ChartSeries>
              <ChartLegend position="bottom" />
            </Chart>
          ),
          rowspan: 4,
          width: "15%",
        },
      ],
    },
    {
      col: [
        {
          value: "Maschinetype:",
        },
        {
          value: <Input height block name="Maschinetype" onChange={setValue} />,
        },
      ],
    },
    {
      col: [
        {
          value: "Automation:",
        },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none"}}
            />
          ),
        },
      ],
    },
    {
      col: [
        { value: "Lasertype" },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none" }}
            />
          ),
        },
      ],
    },
  ]);
  const [cuttingHeadOverview, setCuttingHeadOverview] = useState([
    {
      col: [
        {
          value: "Lower Protectionglass",
          width: "50%",
        },
        {
          value: (
            <Input
              height
              block
              name="eN"
              onChange={setValue}
              value={values.eN}
			  className="bg-color"
			  
            />
          ),
		  backgroundColor:"#70ad47"
        },
		
      ],
    },
    {
      col: [
        {
          value: "BeamShaper Protectionglass",
          width: "50%",
		 
        },
        {
			value: (
			  <Input
				height
				block
				name="eN"
				onChange={setValue}
				value={values.eN}
				className="bg-color"
				
			  />
			),
			backgroundColor:"#70ad47"
		  },
		
      ],
    },
    {
      col: [
        {
          value: "Upper Protectionglass",
          width: "50%",
		 
        },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none", backgroundColor:"#ffc000" }}
            />
          ),
		  backgroundColor:"#ffc000"
        },
      ],
    },
    {
      col: [
        { value: "LensTemperature", width: "50%", },
	{
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none", backgroundColor:"#ff0000" }}
            />
          ),
		  backgroundColor:"#ff0000"
        },
      ],
    },
    {
      col: [
        { value: "SpindleCurrent", width: "50%" },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none", backgroundColor:"#70ad47" }}
            />
          ),
		  backgroundColor:"#70ad47"
        },
      ],
    },
  ]);
  const [drawer, setDrawer] = useState([
    {
      col: [
        {
          value: "Cycle type",
          width: "20%",
          head: "bold",
        },
        {
          value: "Amount Total: 79",
          width: "20%",
          head: "bold",
        },
        {
          value: "Total: 900Min",
          width: "50%",
          head: "bold",
        },
      ],
    },
    {
      col: [
        {
          value: "Drawer cycle <30s",
          width: "50%",
        },

        {
          value: <Input height block name="Maschinetype" onChange={setValue} />,
        },
      ],
    },
    {
      col: [
        {
          value: "Drawer cycle <30s",
          width: "50%",
        },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none" }}
            />
          ),
        },
      ],
    },
    {
      col: [
        { value: "Drawer cycle <1h", width: "50%" },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none" }}
            />
          ),
        },
      ],
    },
    {
      col: [
        { value: "Drawer cycle <1h", width: "50%" },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none" }}
            />
          ),
        },
      ],
    },
  ]);
  const [errorOverView, setErrooverview] = useState([
    {
      col: [
        {
          value: "Module type",
          width: "50%",
		  
        },
        {
          value: (
            <Input
              height
              block
              name="eN"
              onChange={setValue}
              value={values.eN}
            />
          ),
        },
      ],
    },
    {
      col: [
        {
          value: "EtherCat",
          width: "50%",
        },
        {
          value: <Input height block name="Maschinetype" onChange={setValue} />,
        },
      ],
    },
    {
      col: [
        {
          value: "Detection Eye",
          width: "50%",
        },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none" }}
            />
          ),
		  
        },
      ],
    },
    {
      col: [
        { value: "PRU ", width: "50%" },
        {
          value: (
            <input
              placeholder="test"
              style={{ border: "none", outline: "none" }}
            />
          ),
        },
      ],
    },
  ]);
  const pdfExportComponent = useRef(null);
  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4",
  });

  const handleExportWithComponent = (event) => {
    const di = {
      width: "6.2in !important",
      height: "8.7in !important",
    };

    setWidthh(di);
    pdfExportComponent.current.save();
    console.log("values", values);
  };

  return (
    <div id="example">
      <div className="box wide hidden-on-narrow">
        <div className="box-col">
          <h4>Export PDF</h4>
          <Button primary={true} onClick={handleExportWithComponent}>
            Export
          </Button>
        </div>
      </div>
      <div className="page-container hidden-on-narrow">
        <PDFExport
          ref={pdfExportComponent}
          paperSize="A4"
          repeatHeaders={true}
          scale={0.6}
          pageTemplate={() => <h1> template</h1>}
        >
          <div className={`pdf-page ${layoutSelection.value} ${widthh}`}>
            <div className="inner-page">
				<TempletHeader></TempletHeader>
              <Text text={KEYS.ramDump} variant="h2" />
              <Text
                text={KEYS.generalOverview}
                variant="h3"
                className="secondary-heading"
              ></Text>

              {/* generalOverTableData */}
              <Table data={generalOverview} width="100%" />
              <Text
                text={KEYS.softwareOverview}
                variant="h3"
                className="secondary-heading"
              ></Text>

			  {/* softwareOverViewTavleData */}

              <Text
                text={KEYS.softwareOverviewDesc}
                variant="para1"
                className="w-50"
              ></Text>
              <Text text={KEYS.cuttingheadOverview} variant="h3" className="secondary-heading"></Text>
              <Text
                text={KEYS.cuttingheadOverviewDesc}
                variant="para1"
              ></Text>
              <Table data={cuttingHeadOverview} width="70%" />

			  {/* DrawerTableData */}

              <Text
                text={KEYS.drawerCycle}
                variant="para1"
              ></Text>
              <Table data={drawer} width="100%"></Table>

			  {/* errorOverViewTavleData*/}

              <Text text={KEYS.errorOverview} variant="h3" className="secondary-heading"></Text>
              <Text
                text={KEYS.errorOverviewDesc}
                variant="para1"
              ></Text>
              <Table data={errorOverView} width="100%" />
              <Fotter></Fotter>
            </div>
          </div>
        </PDFExport>
      </div>
    </div>
  );
}

export default LayoutSample;
