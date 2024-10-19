// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "Εισαγωγή_βραχομηχανικών_–_γεωτεχνικών_συνθηκών.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("Εισαγωγή_βραχομηχανικών_–_γεωτεχνικών_συνθηκών.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', '194a03c7-3541-4cc5-820d-257c08fd52c2' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "el");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"BreadcrumbStart":"Αρχική σελίδα:","BrsNextButton":"Επόμενο","BrsPrevButton":"Προηγούμενο","CloseFavorites":"Κλείσιμο αγαπημένων","ContentsTab":"Περιεχόμενα","CookiesAcceptText":"Σας ζητούμε να αποδεχτείτε τα cookie για σκοπούς επιδόσεων, ευαναγνωστότητας και εμπειρίας. Τα cookie χρησιμοποιούνται για την επισήμανση αγαπημένων θεμάτων με σελιδοδείκτη και για να είναι δυνατή η αποκατάσταση στον πίνακα περιεχομένων, στο ευρετήριο και στο γλωσσάρι κατά την αλλαγή θέματος. Αυτή η ρύθμιση ζητείται μόνο μία φορά και μπορείτε να την αλλάξετε με εκκαθάριση των cookie του προγράμματος περιήγησης.","CookiesAcceptButton":"Αποδοχή","CookiesDenyButton":"Αργότερα","EditFavorites":"Επεξεργασία αγαπημένων","FavoriteArticle":"αποθηκευμένο άρθρο","FavoriteArticles":"αποθηκευμένα άρθρα","FullScreenButton":"Πλήρης οθόνη","GlossaryTab":"Γλωσσάρι","GlossResultHeaderLabel":"Λεξικό γλωσσαρίου","HideLeftPanelTip":"Απόκρυψη αριστερού παραθύρου","HideResults":"Απόκρυψη αποτελεσμάτων","HomeButton":"Αρχική σελίδα","HomePageLogoTitle":"Λογότυπο","HomePageSubtitle":"Πώς μπορούμε να βοηθήσουμε;","IndexTab":"Ευρετήριο","MCSearchResultShowFullTopic":"Διαβάστε περισσότερα...","MiniTOCCaption":"Σε αυτό το θέμα","NoResultsFoundText":"Δεν βρέθηκαν αποτελέσματα","PrintButtonTip":"Εκτύπωση","RemoveFavItem":"Κατάργηση ","RemoveHighlight":"Κατάργηση επισήμανσης","ResultsFoundText":"Βρέθηκαν %1 αποτελέσματα για %2","SearchPlaceHolder":"Αναζήτηση...","IndexFilterKewords":"Λέξεις-κλειδιά φίλτραρίσματος","GlossaryFilterTerms":"Όροι φιλτραρίσματος","SetAsFavorite":"Ορισμός ως αγαπημένου","ShowLeftPanelTip":"Εμφάνιση αριστερού παραθύρου","TOCTileArticlesCount":"άρθρο(α)","ToTopButtonTip":"Μετάβαση στην κορυφή","UnsetAsFavorite":"Κατάργηση ορισμού ως αγαπημένου","TopicHiddenText":"Αυτό το θέμα έχει φιλτραριστεί με τα επιλεγμένα φίλτρα.","ResetFilters":"Επαναφορά φίλτρων","SkipToMainContent":"Μετάβαση στο κύριο περιεχόμενο","ClearSearchBox":"Εκκαθάριση του πλαισίου αναζήτησης","RemoveFilter":"Κατάργηση φίλτρου","SelectedFilters":"Επιλεγμένα φίλτρα","CloseSidebar":"Κλείσιμο πλευρικής γραμμής","OpenMenu":"Άνοιγμα μενού","CloseMenu":"Κλείσιμο μενού","ViewMore":"Προβολή περισσότερων","SearchPaginationLabel":"Αποτελέσματα %1 έως %2 από %3","NextSearchResults":"Επόμενη σελίδα αναζήτησης","PrevSearchResults":"Προηγούμενη σελίδα αναζήτησης"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "Rock Mechanics, By Dr. C. Sachpazis");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Orange");
model.publish(rh.consts('CHAT_API_SESSION_TOKEN'), "");
model.publish(rh.consts('CHAT_API_PROJ_ID'), "");

model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
model.publish(rh.consts('KEY_LOGO_URL'), "");
model.publish(rh.consts('KEY_SPECIAL_CHARS'), "0;1;2;3;4;5;6;7;8;9");
})();
