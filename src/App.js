import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicyComp from "./Components/privacypolicy";
import CompContactUs from "./Components/contactus";
import ImageGenerationPrivacy from "./Components/imageprivacy";
import UploadQuotes from "./Components/uploadquotes";
import QuotesPrivacy from "./Components/quotesprivacy";
import MemePrivacyPolicy from "./Components/memeprivacr";
import UploadBlogs from "./Components/uploadBlogs";
import UploadReciepes from "./Components/uploadReciepe";
import BloggingAppPrivacy from "./Components/BlogPrivacy";
import UploadMemes from "./Components/uploadMemes";
import DheriPrivacyPolicy from "./Components/dheriPrivacy";
import ReciepePrivacy from "./Components/ReciepePrivacy";
import ShoppingPrivacy from "./Components/ShoppingPrivacy";
import TodoPrivacy from "./Components/TodoPrivacy";
import UploadPoetry from "./Components/UploadPoetry";
import PrivacyPoetry from "./Components/poetryprivacy";
import UnitCOnPrivacy from "./Components/unitconverterprivacy";
import UploadHairStyles from "./Components/UploadHairstyles";
import HairStylesPrivacy from "./Components/hairstylesprivacy";
import UploadMehendi from "./Components/UploadMehendiDesign";
import MehendiPrivacy from "./Components/mehendiprivacy";
import QrPolicy from "./Components/QrPolicy";
import UploadNails from "./Components/UploadNailArts";
import NailArtPrivacy from "./Components/mehendiprivacy";
import LifeStylebilogs from "./Components/uploadlifestylebilogs";
import BloggingAppPrivacyLifestyle from "./Components/lifestyleprivacy";
import MakeupBilog from "./Components/makeupbilogs";
import MakeupPrivacy from "./Components/makeupbilogprivacy";
import CitiesUpload from "./Components/UploadCities";
import CitiesTourism from "./Components/Citiesprivacy";
import UploadDecore from "./Components/UploadDecore";
import HomedecorePrivacy from "./Components/decoreprivacy";
import PrivacyJokes from "./Components/jokesPrivacy";
import UploadJokes from "./Components/UploadJokes";
import UploadLanguage from "./Components/Uploadlanguages";
import LanguagePrivacy from "./Components/languageprivacy";
import LostFoundPrivacy from "./Components/lostfoundPrivacy";
import UploadNotes from "./Components/uploadbirthdaynotes";
import BirthdayPrivacy from "./Components/birthdayprivacy";
import IllustartionsUpload from "./Components/uploadillustrations";
import ReducerFile from "./Components/reducerfile";
import ANyAppPrivacy from "./Components/apprivacy";
import PracticeComponents from "./Components/practice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/app/Privacypolicy"
          element={<PrivacyPolicyComp />}
        />
        <Route exact path="/app/ContactUs" element={<CompContactUs />} />
        <Route exact path="/practice" element={<PracticeComponents />} />
        <Route
          exact
          path="/image/Privacypolicy"
          element={<ImageGenerationPrivacy />}
        />
        <Route exact path="/quotes/Privacypolicy" element={<QuotesPrivacy />} />
        <Route
          exact
          path="/meme/Privacypolicy"
          element={<MemePrivacyPolicy />}
        />
        <Route
          exact
          path="/dheri/Privacypolicy"
          element={<DheriPrivacyPolicy />}
        />
        <Route
          exact
          path="/recipe/Privacypolicy"
          element={<ReciepePrivacy />}
        />
        <Route
          exact
          path="/shopping/Privacypolicy"
          element={<ShoppingPrivacy />}
        />
        <Route exact path="/poetry/Privacypolicy" element={<PrivacyPoetry />} />
        <Route
          exact
          path="/unitConverter/Privacypolicy"
          element={<UnitCOnPrivacy />}
        />
        <Route exact path="/todo/Privacypolicy" element={<TodoPrivacy />} />
        <Route
          exact
          path="/hairstyle/Privacypolicy"
          element={<HairStylesPrivacy />}
        />
        <Route
          exact
          path="/design/NailArtPrivacy"
          element={<NailArtPrivacy />}
        />
        <Route
          exact
          path="/blogs/BloggingAppPrivacy"
          element={<BloggingAppPrivacy />}
        />
        <Route
          exact
          path="/blogs/LifeStyleBloggingPrivacy"
          element={<BloggingAppPrivacyLifestyle />}
        />
        <Route exact path="/blogs/MakeupPrivacy" element={<MakeupPrivacy />} />
        <Route exact path="/blogs/MakeupBilog" element={<MakeupBilog />} />
        <Route exact path="/blogs/Uploadlogs" element={<UploadBlogs />} />
        <Route exact path="/CitiesUpload" element={<CitiesUpload />} />
        <Route exact path="/CitiesPrivacy" element={<CitiesTourism />} />
        <Route exact path="/blogs/lifestyle" element={<LifeStylebilogs />} />
        <Route exact path="/appprivacy" element={<ANyAppPrivacy />} />
        <Route
          exact
          path="/reciepe/UplodReciepes"
          element={<UploadReciepes />}
        />
        <Route exact path="/memes/UploadMemes" element={<UploadMemes />} />
        <Route
          exact
          path="/styles/UploadHairStyles"
          element={<UploadHairStyles />}
        />

        <Route exact path="/styles/UploadDecore" element={<UploadDecore />} />
        <Route
          exact
          path="/styles/HomedecorePrivacy"
          element={<HomedecorePrivacy />}
        />

        <Route exact path="/poetry/UploadPoetry" element={<UploadPoetry />} />
        <Route exact path="/jokes/JokesPrivacy" element={<PrivacyJokes />} />
        <Route
          exact
          path="/lost/Privacypolicy"
          element={<LostFoundPrivacy />}
        />
        <Route exact path="/jokes/UploadJokes" element={<UploadJokes />} />
        <Route exact path="/design/UploadMehendi" element={<UploadMehendi />} />
        <Route exact path="/design/UploadNails" element={<UploadNails />} />
        <Route
          exact
          path="/design/illustrations"
          element={<IllustartionsUpload />}
        />
        <Route
          exact
          path="/design/Privacypolicy"
          element={<MehendiPrivacy />}
        />
        <Route exact path="/qr/Privacypolicy" element={<QrPolicy />} />
        <Route exact path="/UploadLanguage" element={<UploadLanguage />} />
        <Route exact path="/LanguagePrivacy" element={<LanguagePrivacy />} />
        <Route exact path="/UploadNotes" element={<UploadNotes />} />
        <Route
          exact
          path="/birthadaytrackerprivacy"
          element={<BirthdayPrivacy />}
        />
        <Route exact path="/ReducerFile" element={<ReducerFile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
