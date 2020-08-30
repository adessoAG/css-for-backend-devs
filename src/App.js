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
  const width = slideNumber === 0 ? '106' : '70';
  const height = slideNumber === 0 ? '40' : '70';
  return html`
  <${FlexBox} color="red" justifyContent="space-between" position="fixed" right=${0}>
    <${Box} padding="1em">
      <${Image} height="${height}px" width="${width}px" src="${img}" />
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
    tertiary: '#ffffff',
    headSlide: 'rgb(2,117,216, 0.05)'
  },
  fontSizes: {
    h1: '72px',
    h2: '64px',
    h3: '56px',
    text: '35px',
    monospace: '20px'
  },
  fonts: {
    header: '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Quicksand", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace'
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
        <Slide backgroundColor="headSlide"><div className="head-slide"><Intro.Heading /></div></Slide>
        <Slide backgroundImage="url(frontend/alien.jpg)" backgroundOpacity="0.9" textColor="white"><Intro.FunnyStart /></Slide>
        <Slide><Intro.Before /></Slide>
        <Slide><Intro.Today /></Slide>
        <Slide><Intro.CSSInJs /></Slide>
        <Slide><Intro.Trinity /></Slide>
        <Slide><Intro.HTMLOneLiner /></Slide>
        <Slide><Intro.CSSOneLiner /></Slide>
        <Slide><Intro.CSSLayoutAndDesign /></Slide>
        <Slide><Intro.JSOneLiner /></Slide>
        {/** Browser Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><Browser.Heading /></div></Slide>
        <Slide><Browser.BrowserHosileEnvironment /></Slide>
        <Slide><Browser.ThisIsWeb /></Slide>
        <Slide><Browser.ThisWillBeWeb /></Slide>
        <Slide><Browser.DominancesInWebWorld /></Slide>
        <Slide><Browser.NothisIStimeless /></Slide>
        <Slide><Browser.TheresNoPerfectBrowser /></Slide>
        {/** HTMLIntro Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><HTMLIntro.POSHHeading /></div></Slide>
        <Slide><HTMLIntro.HTMLHistory /></Slide>
        <Slide><HTMLIntro.SemanticsHTML /></Slide>
        <Slide><HTMLIntro.SemanticsHTML2 /></Slide>
        <Slide><HTMLIntro.SemanticsHTML3 /></Slide>
        {/** HTMLBasics Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><HTMLBasics.Heading /></div></Slide>
        <Slide><HTMLBasics.Doctype /></Slide>
        <Slide><HTMLBasics.HTMLStructure /></Slide>
        <Slide><HTMLBasics.PeriodicTable /></Slide>
        <Slide><HTMLBasics.Head /></Slide>
        <Slide><HTMLBasics.HeadExample /></Slide>
        <Slide><HTMLBasics.ElementTypes /></Slide>
        <Slide><HTMLBasics.BlockElement /></Slide>
        <Slide><HTMLBasics.InlineElement /></Slide>
        <Slide><HTMLBasics.ValidIsNotRight /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><HTMLBasics.ImagesHeading /></div></Slide>
        <Slide><HTMLBasics.ImageBasics /></Slide>
        <Slide><HTMLBasics.AltTagMeme /></Slide>
        <Slide><HTMLBasics.Figure /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><HTMLBasics.ResponsiveImageHeading /></div></Slide>
        <Slide><HTMLBasics.Picture /></Slide>
        <Slide><HTMLBasics.SrcSet /></Slide>
        {/** HTMLAdvanced Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><HTMLAdvanced.NavigationHeading /></div></Slide>
        <Slide><HTMLAdvanced.NavigationBasics /></Slide>
        <Slide><HTMLAdvanced.NavigationMoreInfo /></Slide>
        <Slide><HTMLAdvanced.NotEverytingIsNavigation /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><HTMLAdvanced.TableHeading /></div></Slide>
        <Slide><HTMLAdvanced.TableSkeleton /></Slide>
        <Slide><HTMLAdvanced.TableHead /></Slide>
        <Slide><HTMLAdvanced.TableBody /></Slide>
        <Slide><HTMLAdvanced.TableFooter /></Slide>
        <Slide><HTMLAdvanced.TableCSSProperties /></Slide>
        <Slide><HTMLAdvanced.TableCSSProperties2 /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><HTMLAdvanced.FormHeading /></div></Slide>
        <Slide><HTMLAdvanced.FormExample /></Slide>
        <Slide><HTMLAdvanced.FormLabel /></Slide>
        <Slide><HTMLAdvanced.FormStructure /></Slide>
        <Slide><HTMLAdvanced.FormValidation /></Slide>
        <Slide><HTMLAdvanced.FormCrossBrowser /></Slide>
        <Slide><HTMLAdvanced.CheckboxForm /></Slide>
        <Slide><HTMLAdvanced.Aufgabe /></Slide>
        {/** CSSIntro Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSIntro.Heading /></div></Slide>
        <Slide><CSSIntro.CSSHistory /></Slide>
        <Slide><CSSIntro.AnatomyOfARule /></Slide>
        <Slide><CSSIntro.CSSProperties /></Slide>
        <Slide><CSSIntro.CSSSizes /></Slide>
        {/** CSSBasics Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSBasics.SelectorsHeading /></div></Slide>
        <Slide><CSSBasics.LotOfWaysToSelect /></Slide>
        <Slide><CSSBasics.SimpleSelectors /></Slide>
        <Slide><CSSBasics.PseudoSelectors /></Slide>
        <Slide><CSSBasics.PseudoClasses /></Slide>
        <Slide><CSSBasics.PseudoElement /></Slide>
        <Slide><CSSBasics.ComplexSelectors /></Slide>
        <Slide><CSSBasics.CompoundSelectors /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSBasics.SpecificityHeading /></div></Slide>
        <Slide><CSSBasics.SpecificityIntent /></Slide>
        <Slide><CSSBasics.SpecificityRules /></Slide>
        <Slide><CSSBasics.SpecificityExamples1 /></Slide>
        <Slide><CSSBasics.SpecificityExamples2 /></Slide>
        <Slide><CSSBasics.SpecificityExamples3 /></Slide>
        <Slide><CSSBasics.SpecificityExamples4 /></Slide>
        <Slide><CSSBasics.SpecificityExamples5 /></Slide>
        <Slide><CSSBasics.SpecificityExamples6 /></Slide>
        <Slide><CSSBasics.SpecificityExamples7 /></Slide>
        <Slide><CSSBasics.SpecificityExamples8 /></Slide>
        <Slide><CSSBasics.SpecificityExamples9 /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSBasics.CascadeHeading /></div></Slide>
        <Slide><CSSBasics.WhyDoesntThisWork /></Slide>
        <Slide><CSSBasics.LastShows /></Slide>
        <Slide><CSSBasics.LastShowsExample /></Slide>
        <Slide><CSSBasics.LastShowsExample2 /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSBasics.BoxModelHeading /></div></Slide>
        <Slide><CSSBasics.BoxModelImage /></Slide>
        <Slide><CSSBasics.BoxModelScrollbars /></Slide>
        <Slide><CSSBasics.BoxModelScrollbars2 /></Slide>
        <Slide><CSSBasics.Aufgaben /></Slide>
        {/** CSSAdvanced Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSAdvanced.Floats /></div></Slide>
        <Slide><CSSAdvanced.FloatsBackground /></Slide>
        <Slide><CSSAdvanced.FloatAndClear /></Slide>
        <Slide><CSSAdvanced.Clearing /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSAdvanced.PositionHeading /></div></Slide>
        <Slide><CSSAdvanced.PositionExample /></Slide>
        <Slide><CSSAdvanced.StaticPosition /></Slide>
        <Slide><CSSAdvanced.RelativePosition /></Slide>
        <Slide><CSSAdvanced.AbsolutePosition /></Slide>
        <Slide><CSSAdvanced.AbsolutePositionWithoutZIndex /></Slide>
        <Slide><CSSAdvanced.AbsolutePositionWithZIndex /></Slide>
        <Slide><CSSAdvanced.TheContextIsImp /></Slide>
        <Slide><CSSAdvanced.RelativeWithZIndex /></Slide>
        <Slide><CSSAdvanced.FixedOrSticky /></Slide>
        <Slide><CSSAdvanced.ZIndexJoke /></Slide>
        <Slide><CSSAdvanced.Codepen /></Slide>
        <Slide><CSSAdvanced.Aufgabe /></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><CSSAdvanced.DisplayHeading /></div></Slide>
        <Slide><CSSAdvanced.DisplayDefinition /></Slide>
        <Slide><CSSAdvanced.DisplayOptions /></Slide>
        <Slide><CSSAdvanced.HTMLDoesntShow /></Slide>
        <Slide><CSSAdvanced.TableOptics /></Slide>
        <Slide><CSSAdvanced.Navigation /></Slide>
        <Slide><CSSAdvanced.HTMLExample /></Slide>
        <Slide><CSSAdvanced.CSSExample /></Slide>
        <Slide><CSSAdvanced.Result /></Slide>
        {/** Flexbox and Grid Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><FlexBoxAndGrid.FlexBoxHeading /></div></Slide>
        <Slide backgroundColor="headSlide"><div className="head-slide"><FlexBoxAndGrid.GridHeading /></div></Slide>

        {/** End Section */}
        <Slide backgroundColor="headSlide"><div className="head-slide"><End.ProgressiveEnhancementIntro /></div></Slide>
        <Slide><End.ProgressiveEnhancementExample /></Slide>
        <Slide><End.CSSResetOrNormalizationHeading /></Slide>
        <Slide><End.CSSResetOrNormalizationContext /></Slide>
        <Slide><End.ThankYou /></Slide>
      </Deck>
    );
  }
}
export default App;
