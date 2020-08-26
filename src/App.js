import React from 'react';
import { Deck, Slide, FlexBox, Box, FullScreen, Image } from 'spectacle';
import Intro from './1.Intro';
import Browser from './2.Browser';
import HTMLIntro from './3.HTML-Intro';
import HTMLBasics from './4.HTML-Basics';
import HTMLAdvanced from './5.HTML-Advanced';
import CSSIntro from './6.CSS-Intro';
import CSSBasics from './7.CSS-Basics';
import CSSAdvanced from './8.CSS-Advanced';
import FlexBoxAndGrid from './9.FlexBoxAndGrid';
import End from './10.End';
import htm from 'htm';
import './App.css';

const html = htm.bind(React.createElement);

const template = ({ slideNumber }) => {
  const img = slideNumber === 0 ? 'logo/adesso-logo.svg' : 'logo/adesso-logo-small.png';
  return html`
  <${FlexBox} color="red" justifyContent="space-between" position="fixed" top=${0} right=${0}>
    <${Box} height="40px" width="106px" padding="1em">
      <${Image} src="${img}" />
    </${Box}>
  </${FlexBox}>
  <${FlexBox} color="red" justifyContent="space-between" position="absolute" bottom=${0} width=${1}>
    <${Box} padding="0 1em">
      <${FullScreen} />
    </${Box}>
  </${FlexBox}>`;
}

const theme = {
  colors: {
    primary: 'rgb(0,0,0, 0.8)',
    secondary: '#0275d8',
    tertiary: '#ffffff'
  },
  fontSizes: {
    header: '64px',
    paragraph: '28px'
  },
  size: {
    width: 1733,
    height: 800,
  }
};

class App extends React.Component {

  render() {
    return (
      <Deck transition={["zoom", "slide"]} template={template} theme={theme} transitionDuration={500}>
        {/** Intro Section */}
        <Slide><Intro.Heading /></Slide>
        <Slide><Intro.FunnyStart /></Slide>
        <Slide><Intro.BrowserHosileEnvironment /></Slide>
        <Slide><Intro.Before /></Slide>
        <Slide><Intro.Today /></Slide>
        <Slide><Intro.CSSInJs /></Slide>
        <Slide><Intro.HTMLOneLiner /></Slide>
        <Slide><Intro.CSSOneLiner /></Slide>
        <Slide><Intro.CSSLayoutAndDesign /></Slide>
        <Slide><Intro.JSOneLiner /></Slide>
        {/** Browser Section */}
        <Slide><Browser.Heading /></Slide>
        <Slide><Browser.ThisIsWeb /></Slide>
        <Slide><Browser.ThisWillBeWeb /></Slide>
        <Slide><Browser.DominancesInWebWorld /></Slide>
        <Slide><Browser.NothisIStimeless /></Slide>
        <Slide><Browser.TheresNoPerfectBrowser /></Slide>
        {/** HTMLIntro Section */}
        <Slide><HTMLIntro.POSHHeading /></Slide>
        <Slide><HTMLIntro.HTMLHistory /></Slide>
        <Slide><HTMLIntro.DecentMarkup /></Slide>
        <Slide><HTMLIntro.SemanticsHTML /></Slide>
        <Slide><HTMLIntro.SemanticsHTML2 /></Slide>
        <Slide><HTMLIntro.SemanticsHTML3 /></Slide>
        {/** HTMLBasics Section */}
        <Slide><HTMLBasics.Heading /></Slide>
        <Slide><HTMLBasics.Doctype /></Slide>
        <Slide><HTMLBasics.HTMLStructure /></Slide>
        <Slide><HTMLBasics.PeriodicTable /></Slide>
        <Slide><HTMLBasics.Head /></Slide>
        <Slide><HTMLBasics.HeadExample /></Slide>
        <Slide><HTMLBasics.ValidIsNotRight /></Slide>
        <Slide><HTMLBasics.ImagesHeading /></Slide>
        <Slide><HTMLBasics.ImageBasics /></Slide>
        <Slide><HTMLBasics.AltTagMeme /></Slide>
        <Slide><HTMLBasics.Figure /></Slide>
        <Slide><HTMLBasics.ResponsiveImageHeading /></Slide>
        <Slide><HTMLBasics.Picture /></Slide>
        <Slide><HTMLBasics.SrcSet /></Slide>
        {/** HTMLAdvanced Section */}
        <Slide><HTMLAdvanced.NavigationHeading /></Slide>
        <Slide><HTMLAdvanced.NavigationBasics /></Slide>
        <Slide><HTMLAdvanced.NavigationMoreInfo /></Slide>
        <Slide><HTMLAdvanced.NotEverytingIsNavigation /></Slide>
        <Slide><HTMLAdvanced.TableHeading /></Slide>
        <Slide><HTMLAdvanced.TableSkeleton /></Slide>
        <Slide><HTMLAdvanced.TableHead /></Slide>
        <Slide><HTMLAdvanced.TableBody /></Slide>
        <Slide><HTMLAdvanced.TableFooter /></Slide>
        <Slide><HTMLAdvanced.TableCSSProperties /></Slide>
        <Slide><HTMLAdvanced.TableCSSProperties2 /></Slide>
        <Slide><HTMLAdvanced.FormHeading /></Slide>
        <Slide><HTMLAdvanced.FormExample /></Slide>
        <Slide><HTMLAdvanced.FormLabel /></Slide>
        <Slide><HTMLAdvanced.FormStructure /></Slide>
        <Slide><HTMLAdvanced.FormValidation /></Slide>
        <Slide><HTMLAdvanced.FormCrossBrowser /></Slide>
        <Slide><HTMLAdvanced.CheckboxForm /></Slide>
        <Slide><HTMLAdvanced.Aufgabe /></Slide>
        {/** CSSIntro Section */}
        <Slide><CSSIntro.Heading /></Slide>
        <Slide><CSSIntro.CSSHistory /></Slide>
        <Slide><CSSIntro.ElementTypes /></Slide>
        <Slide><CSSIntro.InlineElement /></Slide>
        <Slide><CSSIntro.InlineBlockElement /></Slide>
        <Slide><CSSIntro.BlockElement /></Slide>
        <Slide><CSSIntro.TableElement /></Slide>
        <Slide><CSSIntro.FormElement /></Slide>
        <Slide><CSSIntro.PseudoElement /></Slide>
        <Slide><CSSIntro.AnatomyOfARule /></Slide>
        {/** CSSBasics Section */}
        <Slide><CSSBasics.Heading /></Slide>
        <Slide><CSSBasics.SelectorsHeading /></Slide>
        <Slide><CSSBasics.LotOfWaysToSelect /></Slide>
        <Slide><CSSBasics.SimpleSelectors /></Slide>
        <Slide><CSSBasics.PseudoSelectors /></Slide>
        <Slide><CSSBasics.ComplexSelectors /></Slide>
        <Slide><CSSBasics.CompoundSelectors /></Slide>
        <Slide><CSSBasics.SpecificityHeading /></Slide>
        <Slide><CSSBasics.SpecificityIntent /></Slide>
        <Slide><CSSBasics.SpecificityRules /></Slide>
        <Slide><CSSBasics.SpecificityExamples /></Slide>
        <Slide><CSSBasics.CascadeHeading /></Slide>
        <Slide><CSSBasics.WhyDoesntThisWork /></Slide>
        <Slide><CSSBasics.LastShows /></Slide>
        <Slide><CSSBasics.LastShowsExample /></Slide>
        <Slide><CSSBasics.BoxModelHeading /></Slide>
        <Slide><CSSBasics.BoxModelImage /></Slide>
        <Slide><CSSBasics.BoxModelScrollbars /></Slide>
        <Slide><CSSBasics.BoxModelScrollbars2 /></Slide>
        <Slide><CSSBasics.Aufgaben /></Slide>
        {/** CSSAdvanced Section */}
        <Slide><CSSAdvanced.Floats /></Slide>
        <Slide><CSSAdvanced.FloatsBackground /></Slide>
        <Slide><CSSAdvanced.FloatAndClear /></Slide>
        <Slide><CSSAdvanced.Clearing /></Slide>
        <Slide><CSSAdvanced.PositionHeading /></Slide>
        <Slide><CSSAdvanced.PositionExample /></Slide>
        <Slide><CSSAdvanced.StaticPosition /></Slide>
        <Slide><CSSAdvanced.RelativePosition /></Slide>
        <Slide><CSSAdvanced.AbsolutePosition /></Slide>
        <Slide><CSSAdvanced.AbsolutePositionWithoutZIndex /></Slide>
        <Slide><CSSAdvanced.AbsolutePositionWithZIndex /></Slide>
        <Slide><CSSAdvanced.FixedOrStickyPostion /></Slide>
        <Slide><CSSAdvanced.ZIndexJoke /></Slide>
        <Slide><CSSAdvanced.Aufgabe /></Slide>
        <Slide><CSSAdvanced.DisplayHeading /></Slide>
        <Slide><CSSAdvanced.DisplayDefinition /></Slide>
        <Slide><CSSAdvanced.DisplayOptions /></Slide>
        {/** Flexbox and Grid Section */}
        <Slide><FlexBoxAndGrid.FlexBoxHeading /></Slide>
        <Slide><FlexBoxAndGrid.GridHeading /></Slide>

        {/** End Section */}
        <Slide><End.ProgressiveEnhancementIntro /></Slide>
        <Slide><End.ProgressiveEnhancementExample /></Slide>
        <Slide><End.CSSReset /></Slide>
        <Slide><End.CSSNormalize /></Slide>
        <Slide><End.ThankYou /></Slide>
      </Deck>
    );
  }
}
export default App;
