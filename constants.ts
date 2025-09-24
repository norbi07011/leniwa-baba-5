import { MenuCategory, Review } from './types';

export const RESTAURANT_PHONE = "+31644562722";
export const RESTAURANT_PHONE_INTL = "31644562722";
export const FACEBOOK_URL = "https://www.facebook.com/share/1LKKmRgLA1/";
export const GOOGLE_REVIEWS_URL = "https://share.google/xASWsAlylptATLTxL";

export const MENU_DATA: MenuCategory[] = [
  {
    category: 'category_soups',
    items: [
      { name: 'zurek_slaski', description: 'zurek_slaski_desc', imageIds: ['zurek-slaski.jpg'], ingredientKeys: ['ingredient_rye_sourdough', 'ingredient_water', 'ingredient_white_sausage', 'ingredient_smoked_bacon', 'ingredient_egg', 'ingredient_potatoes', 'ingredient_carrot', 'ingredient_onion', 'ingredient_garlic', 'ingredient_marjoram', 'ingredient_cream', 'ingredient_horseradish', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: ['allergen_gluten', 'allergen_eggs', 'allergen_milk', 'allergen_celery', 'allergen_mustard'] },
      { name: 'rosol_kury', description: 'rosol_kury_desc', imageIds: ['rosol-z-kury.jpg'], ingredientKeys: ['ingredient_chicken', 'ingredient_mirepoix', 'ingredient_onion', 'ingredient_noodles', 'ingredient_parsley', 'ingredient_salt', 'ingredient_pepper', 'ingredient_bay_leaf', 'ingredient_allspice'], allergenKeys: ['allergen_celery', 'allergen_eggs', 'allergen_gluten'] },
      { name: 'rosol_kaczki', description: 'rosol_kaczki_desc', imageIds: ['Rosół z kaczki.jpg'], ingredientKeys: ['ingredient_duck', 'ingredient_mirepoix', 'ingredient_onion', 'ingredient_noodles', 'ingredient_parsley', 'ingredient_salt', 'ingredient_pepper', 'ingredient_lovage'], allergenKeys: ['allergen_celery', 'allergen_eggs', 'allergen_gluten'] },
      { name: 'domowa_ogorkowa', description: 'domowa_ogorkowa_desc', imageIds: ['Domowa zupa ogórkowa.jpg'], ingredientKeys: ['ingredient_meat_broth', 'ingredient_pickled_cucumbers', 'ingredient_potatoes', 'ingredient_carrot', 'ingredient_cream', 'ingredient_dill', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: ['allergen_milk', 'allergen_celery'] },
      { name: 'barszcz_czerwony', description: 'barszcz_czerwony_desc', imageIds: ['Barszcz czerwony.jpg'], ingredientKeys: ['ingredient_beetroot_sourdough', 'ingredient_beetroots', 'ingredient_veg_broth', 'ingredient_garlic', 'ingredient_marjoram', 'ingredient_sugar', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: ['allergen_celery'] },
      { name: 'barszcz_czerwony_krokiet', description: 'barszcz_czerwony_krokiet_desc', imageIds: ['Barszcz czerwony z krokietem.jpg'], ingredientKeys: ['ingredient_beetroots', 'ingredient_croquette'], allergenKeys: ['allergen_celery', 'allergen_gluten', 'allergen_eggs', 'allergen_milk'] },
      { name: 'barszcz_czerwony_slaski', description: 'barszcz_czerwony_slaski_desc', imageIds: ['Barszcz czerwony śląski z sadzonym.jpg'], ingredientKeys: ['ingredient_beetroots', 'ingredient_egg', 'ingredient_potatoes', 'ingredient_smoked_bacon', 'ingredient_meat_broth', 'ingredient_onion', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: ['allergen_celery', 'allergen_eggs'] },
      { name: 'miesny_familok_sadzony', description: 'miesny_familok_sadzony_desc', imageIds: ['Mięsny familok sadzony (Barszcz z uszkami).jpg'], ingredientKeys: ['ingredient_beetroots', 'ingredient_meat_broth', 'ingredient_uszka', 'ingredient_beetroot_sourdough', 'ingredient_cream', 'ingredient_marjoram'], allergenKeys: ['allergen_gluten', 'allergen_eggs', 'allergen_milk', 'allergen_celery'] },
      { name: 'kapusnica_slaska', description: 'kapusnica_slaska_desc', imageIds: ['Kapuśnica śląska.jpg'], ingredientKeys: ['ingredient_sauerkraut', 'ingredient_smoked_ribs', 'ingredient_potatoes', 'ingredient_carrot', 'ingredient_onion', 'ingredient_bacon', 'ingredient_lard', 'ingredient_bay_leaf', 'ingredient_allspice'], allergenKeys: ['allergen_celery'] },
      { name: 'stroganow', description: 'stroganow_desc', imageIds: ['Strogonow.jpg'], ingredientKeys: ['ingredient_beef_loin', 'ingredient_mushrooms', 'ingredient_onion', 'ingredient_paprika', 'ingredient_pickled_cucumbers', 'ingredient_tomato_concentrate', 'ingredient_broth', 'ingredient_cream', 'ingredient_flour', 'ingredient_mustard'], allergenKeys: ['allergen_milk', 'allergen_gluten', 'allergen_mustard', 'allergen_celery'] },
      { name: 'zupa_dyni_weganska', description: 'zupa_dyni_weganska_desc', imageIds: ['Zupa z dyni wegańskiej.jpg'], ingredientKeys: ['ingredient_hokkaido_pumpkin', 'ingredient_coconut_milk', 'ingredient_ginger', 'ingredient_garlic', 'ingredient_onion', 'ingredient_veg_broth', 'ingredient_olive_oil', 'ingredient_pumpkin_seeds', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: ['allergen_celery'] },
    ],
  },
  {
    category: 'category_main_courses',
    items: [
      { name: 'schabowy', description: 'schabowy_desc', imageIds: ['test-kotlet.jpg'], ingredientKeys: ['ingredient_pork_chop', 'ingredient_egg', 'ingredient_breadcrumbs', 'ingredient_flour', 'ingredient_lard', 'ingredient_potatoes', 'ingredient_cabbage', 'ingredient_carrot', 'ingredient_apple', 'ingredient_cucumber'], allergenKeys: ['allergen_gluten', 'allergen_eggs'] },
      { name: 'piers_kurczaka_schabowy', description: 'piers_kurczaka_schabowy_desc', imageIds: ['Pierś z kurczaka a\'la schabowy.jpg'], ingredientKeys: ['ingredient_chicken_breast', 'ingredient_egg', 'ingredient_breadcrumbs', 'ingredient_flour', 'ingredient_oil', 'ingredient_potatoes', 'ingredient_salad_selection'], allergenKeys: ['allergen_gluten', 'allergen_eggs'] },
      { name: 'placek_wegiersku', description: 'placek_wegiersku_desc', imageIds: ['Placek cygański po bytomsku.jpg'], ingredientKeys: ['ingredient_pancake', 'ingredient_goulash'], allergenKeys: ['allergen_gluten', 'allergen_eggs', 'allergen_celery'] },
      { name: 'rolada_slaska', description: 'rolada_slaska_desc', imageIds: ['Rolada śląska.jpg'], ingredientKeys: ['ingredient_beef', 'ingredient_smoked_bacon', 'ingredient_pickled_cucumbers', 'ingredient_onion', 'ingredient_mustard', 'ingredient_silesian_dumplings', 'ingredient_red_cabbage'], allergenKeys: ['allergen_mustard'] },
      { name: 'zeberka_po_slasku', description: 'zeberka_po_slasku_desc', imageIds: ['Żeberka po śląsku.jpg'], ingredientKeys: ['ingredient_pork_ribs', 'ingredient_onion', 'ingredient_honey', 'ingredient_beer', 'ingredient_plum_jam', 'ingredient_spices', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: ['allergen_gluten', 'allergen_celery'] },
      { name: 'zeberka_smazone_po_slasku', description: 'zeberka_smazone_po_slasku_desc', imageIds: ['Karkówka smarzona1.jpg'], ingredientKeys: ['ingredient_pork_ribs', 'ingredient_garlic', 'ingredient_marjoram', 'ingredient_oil', 'ingredient_potatoes', 'ingredient_salad_selection', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: [] },
      { name: 'karminadel', description: 'karminadel_desc', imageIds: ['Karminadel (kotlet mielony).jpg'], ingredientKeys: ['ingredient_pork_mince', 'ingredient_stale_bread_roll', 'ingredient_milk', 'ingredient_egg', 'ingredient_onion', 'ingredient_breadcrumbs', 'ingredient_potatoes', 'ingredient_beetroot_salad'], allergenKeys: ['allergen_gluten', 'allergen_milk', 'allergen_eggs'] },
      { name: 'bryzol', description: 'bryzol_desc', imageIds: ['Kotlet schabowy.jpg'], ingredientKeys: ['ingredient_pork_loin', 'ingredient_mushrooms', 'ingredient_onion', 'ingredient_oil', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: [] },
      { name: 'rumsztuk', description: 'rumsztuk_desc', imageIds: ['Rumsztyk wołowy z cebulką.jpg'], ingredientKeys: ['ingredient_beef', 'ingredient_onion', 'ingredient_broth', 'ingredient_flour', 'ingredient_oil', 'ingredient_bay_leaf', 'ingredient_allspice'], allergenKeys: ['allergen_gluten', 'allergen_celery'] },
      { name: 'golabki', description: 'golabki_desc', imageIds: ['Gołąbki w sosie pomidorowym.jpg'], ingredientKeys: ['ingredient_white_cabbage', 'ingredient_minced_meat', 'ingredient_rice', 'ingredient_onion', 'ingredient_tomato_concentrate', 'ingredient_broth'], allergenKeys: ['allergen_celery'] },
      { name: 'bigos', description: 'bigos_desc', imageIds: ['Bigos staropolski.jpg'], ingredientKeys: ['ingredient_sauerkraut', 'ingredient_fresh_cabbage', 'ingredient_mixed_meat', 'ingredient_sausage', 'ingredient_bacon', 'ingredient_dried_mushrooms', 'ingredient_prunes', 'ingredient_onion', 'ingredient_tomato_concentrate', 'ingredient_red_wine'], allergenKeys: ['allergen_sulfites'] },
      { name: 'golonko_piwie', description: 'golonko_piwie_desc', imageIds: ['Golonko w piwie2.jpg'], ingredientKeys: ['ingredient_pork_knuckle', 'ingredient_beer', 'ingredient_onion', 'ingredient_garlic', 'ingredient_carrot', 'ingredient_mustard', 'ingredient_horseradish', 'ingredient_allspice', 'ingredient_bay_leaf'], allergenKeys: ['allergen_gluten', 'allergen_mustard', 'allergen_celery'] },
      { name: 'kotlet_szwajcarski', description: 'kotlet_szwajcarski_desc', imageIds: ['Kotlet szwajcarski.jpg'], ingredientKeys: ['ingredient_chicken_breast', 'ingredient_ham', 'ingredient_cheese', 'ingredient_egg', 'ingredient_breadcrumbs', 'ingredient_flour'], allergenKeys: ['allergen_milk', 'allergen_gluten', 'allergen_eggs'] },
      { name: 'karkowka_sosie', description: 'karkowka_sosie_desc', imageIds: ['Karkówka w sosie własnym.jpg'], ingredientKeys: ['ingredient_pork_neck', 'ingredient_onion', 'ingredient_broth', 'ingredient_flour', 'ingredient_lard', 'ingredient_spices'], allergenKeys: ['allergen_gluten', 'allergen_celery'] },
      { name: 'watrobka_cebulka', description: 'watrobka_cebulka_desc', imageIds: ['Wątróbka drobiowa z cebulką.jpg'], ingredientKeys: ['ingredient_chicken_liver', 'ingredient_onion', 'ingredient_flour', 'ingredient_oil', 'ingredient_salt', 'ingredient_pepper', 'ingredient_marjoram'], allergenKeys: ['allergen_gluten'] },
      { name: 'kluski_slaskie_okrasa', description: 'kluski_slaskie_okrasa_desc', imageIds: ['Kluski śląskie z okrasą.jpg'], ingredientKeys: ['ingredient_potatoes', 'ingredient_potato_flour', 'ingredient_salt', 'ingredient_garnish'], allergenKeys: [] },
      { name: 'karkowka_smazona', description: 'karkowka_smazona_desc', imageIds: ['Karkówka smarzona1.jpg'], ingredientKeys: ['ingredient_pork_neck', 'ingredient_oil', 'ingredient_spices', 'ingredient_potatoes', 'ingredient_salad_selection'], allergenKeys: [] },
      { name: 'weganska_zapiekanka', description: 'weganska_zapiekanka_desc', imageIds: ['vegan zapiekanka z fasoli i warzyw.jpg'], ingredientKeys: ['ingredient_potatoes', 'ingredient_broccoli', 'ingredient_carrot', 'ingredient_yeast_flakes', 'ingredient_plant_milk', 'ingredient_cashews', 'ingredient_onion', 'ingredient_garlic', 'ingredient_nutmeg'], allergenKeys: ['allergen_nuts', 'allergen_soy'] },
      { name: 'pyzy_miesem', description: 'pyzy_miesem_desc', imageIds: ['pyzy z miesem.jpg'], ingredientKeys: ['ingredient_potatoes', 'ingredient_flour', 'ingredient_egg', 'ingredient_minced_meat', 'ingredient_bacon', 'ingredient_onion'], allergenKeys: ['allergen_gluten', 'allergen_eggs'] },
      { name: 'losos_smazony', description: 'losos_smazony_desc', imageIds: ['losos-smazony.jpg'], ingredientKeys: ['ingredient_salmon_fillet', 'ingredient_butter', 'ingredient_dill', 'ingredient_cream', 'ingredient_potatoes', 'ingredient_salt', 'ingredient_pepper'], allergenKeys: ['allergen_fish', 'allergen_milk'] },
      { name: 'pierogi_ruskie', description: 'pierogi_ruskie_desc', imageIds: ['Pierogi z mięsem.jpg'], ingredientKeys: ['ingredient_dough', 'ingredient_filling_ruskie', 'ingredient_garnish_ruskie'], allergenKeys: ['allergen_gluten', 'allergen_eggs', 'allergen_milk'] },
      { name: 'pierogi_miesem', description: 'pierogi_miesem_desc', imageIds: ['pierogi-z-miesem.jpg'], ingredientKeys: ['ingredient_dough', 'ingredient_filling_meat', 'ingredient_garnish'], allergenKeys: ['allergen_gluten', 'allergen_eggs'] },
      { name: 'pierogi_kapusta_grzybami', description: 'pierogi_kapusta_grzybami_desc', imageIds: ['Pierogi z kapustą i grzybami.jpg'], ingredientKeys: ['ingredient_dough', 'ingredient_filling_cabbage'], allergenKeys: ['allergen_gluten', 'allergen_eggs'] },
      { name: 'pierogi_bryndza_szpinakiem', description: 'pierogi_bryndza_szpinakiem_desc', imageIds: ['Pierogi z bryndzą i szpinakiem.jpg'], ingredientKeys: ['ingredient_dough', 'ingredient_filling_spinach', 'ingredient_sage_butter'], allergenKeys: ['allergen_gluten', 'allergen_eggs', 'allergen_milk'] },
    ],
  },
  {
    category: 'category_appetizers',
    items: [
      { name: 'kanapki_smalcem', description: 'kanapki_smalcem_desc', imageIds: ['Pajda chleba ze smalcem.jpg'], ingredientKeys: ['ingredient_rustic_bread', 'ingredient_homemade_lard', 'ingredient_pickled_cucumbers', 'ingredient_onion'], allergenKeys: ['allergen_gluten'] },
    ],
  },
  {
    category: 'category_desserts',
    items: [
      { name: 'szarlotka', description: 'szarlotka_desc', imageIds: ['Szarlotka na ciepło.jpg'], ingredientKeys: ['ingredient_apple', 'ingredient_wheat_flour', 'ingredient_butter', 'ingredient_sugar', 'ingredient_egg', 'ingredient_cinnamon', 'ingredient_whipped_cream'], allergenKeys: ['allergen_gluten', 'allergen_milk', 'allergen_eggs'] }, 
      { name: 'sernik', description: 'sernik_desc', imageIds: ['Serowiec śląski.jpg'], ingredientKeys: ['ingredient_cottage_cheese', 'ingredient_cooked_potatoes', 'ingredient_egg', 'ingredient_sugar', 'ingredient_butter', 'ingredient_wheat_flour', 'ingredient_vanilla_aroma', 'ingredient_crumble'], allergenKeys: ['allergen_milk', 'allergen_eggs', 'allergen_gluten'] }, 
      { name: 'makowiec', description: 'makowiec_desc', imageIds: ['Makowiec.jpg'], ingredientKeys: ['ingredient_poppy_seeds', 'ingredient_wheat_flour', 'ingredient_yeast', 'ingredient_milk', 'ingredient_egg', 'ingredient_sugar', 'ingredient_honey', 'ingredient_dried_fruits', 'ingredient_icing'], allergenKeys: ['allergen_gluten', 'allergen_milk', 'allergen_eggs', 'allergen_nuts'] },
      { name: 'kremowka', description: 'kremowka_desc', imageIds: ['Kremówka.jpg'], ingredientKeys: ['ingredient_puff_pastry', 'ingredient_custard_cream', 'ingredient_powdered_sugar'], allergenKeys: ['allergen_gluten', 'allergen_milk', 'allergen_eggs'] },
    ],
  },
  {
    category: 'category_drinks',
    items: [
      { name: 'napoje_gazowane', description: 'napoje_gazowane_desc', imageIds: ['Napoje gazowane.jpg'], ingredientKeys: ['ingredient_water', 'ingredient_sweeteners', 'ingredient_co2', 'ingredient_aromas'], allergenKeys: [] },
      { name: 'kompot_babuni', description: 'kompot_babuni_desc', imageIds: ['Kompot babuni.jpg'], ingredientKeys: ['ingredient_seasonal_fruits', 'ingredient_water', 'ingredient_sugar'], allergenKeys: [] },
      { name: 'herbata_aromatyczna', description: 'herbata_aromatyczna_desc', imageIds: ['Herbata aromatyczna.jpg'], ingredientKeys: ['ingredient_tea', 'ingredient_water', 'ingredient_tea_addons'], allergenKeys: [] },
      { name: 'kawa_swiezo_mielona', description: 'kawa_swiezo_mielona_desc', imageIds: ['Kawa świeżo mielona.jpg'], ingredientKeys: ['ingredient_coffee_beans', 'ingredient_water', 'ingredient_coffee_addons'], allergenKeys: ['allergen_milk'] },
      { name: 'piwo_lane', description: 'piwo_lane_desc', imageIds: ['Piwo lane.jpg'], ingredientKeys: ['ingredient_water', 'ingredient_barley_malt', 'ingredient_hops', 'ingredient_yeast'], allergenKeys: ['allergen_gluten'] },
      { name: 'kolorowe_drinki', description: 'kolorowe_drinki_desc', imageIds: ['Kolorowe drinki.jpg'], ingredientKeys: ['ingredient_fruit_juices', 'ingredient_syrups', 'ingredient_alcohols', 'ingredient_fruits'], allergenKeys: [] },
    ],
  },
];


export const MOCK_REVIEWS: Review[] = [
    {
        author: "Jan Kowalski",
        text: "Niesamowite jedzenie, jak u mamy! Żurek i pierogi to mistrzostwo świata. Na pewno wrócę!",
        rating: 5,
    },
    {
        author: "Anna Schmidt",
        text: "Sehr gemütliche Atmosphäre und authentisches polnisches Essen. Der Service war ausgezeichnet. Empfehlenswert!",
        rating: 5,
    },
    {
        author: "John Smith",
        text: "A true taste of Poland in the heart of the Netherlands. The 'schabowy' was huge and delicious. Great value for money.",
        rating: 4,
    },
    {
        author: "Zuzana Nováková",
        text: "Skvelá reštaurácia! Cítila som sa ako doma. Obsluha bola veľmi milá a jedlo fantastické. Odporúčam každému.",
        rating: 5,
    },
    {
        author: "Fatima Yılmaz",
        text: "Harika bir deneyimdi. Polonya yemeklerini ilk defa denedim ve bayıldım. Mekan çok şık ve temizdi.",
        rating: 4,
    },
];

export interface Occasion {
  key: string;
  imageId: string;
  descriptionKey: string;
}

export const OCCASIONS_DATA: Occasion[] = [
  { key: 'occasion_birthday', imageId: 'urodziny.jpg', descriptionKey: 'occasion_birthday_desc' },
  { key: 'occasion_corporate', imageId: 'Impreza  firmowa.jpg', descriptionKey: 'occasion_corporate_desc' },
  { key: 'occasion_family_dinner', imageId: 'okładka strony.jpg', descriptionKey: 'occasion_family_dinner_desc' },
  { key: 'occasion_communion', imageId: 'komunia.jpg', descriptionKey: 'occasion_communion_desc' },
  { key: 'occasion_sports', imageId: 'Wydarzenie  sportowe.jpg', descriptionKey: 'occasion_sports_desc' },
  { key: 'occasion_karaoke', imageId: 'Kolorowe drinki.jpg', descriptionKey: 'occasion_karaoke_desc' },
  { key: 'occasion_playstation', imageId: 'Wieczór z grami.jpg', descriptionKey: 'occasion_playstation_desc' },
  { key: 'occasion_other', imageId: 'Inna okazja.jpg', descriptionKey: 'occasion_other_desc' },
];

export interface TeamMember {
  nameKey: string;
  imageId: string;
  positionKey: string;
}

export const TEAM_DATA: TeamMember[] = [
  { nameKey: 'team_chef_name', imageId: 'szef kuchni Carlo Couto Martins.jpg', positionKey: 'team_chef_position' },
  { nameKey: 'team_waiter_name', imageId: 'zespol-waiter.jpg', positionKey: 'team_waiter_position' },
  { nameKey: 'team_manager_name', imageId: 'zespol-manager.jpg', positionKey: 'team_manager_position' },
  { nameKey: 'team_bartender_name', imageId: 'zespol-bartender.jpg', positionKey: 'team_bartender_position' },
];