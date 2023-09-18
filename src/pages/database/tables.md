---
layout: "../../layouts/Markdown.astro"
title: "Database Documentation"
---

## Table of Contents
[Tree Infromation Tables](#tree-information-tables)<br/>
[Big Tree Tables](#big-tree-tables)<br/>
[UFAT Tables](#ufat-tables)<br/>
[List Tables](#list-tables)<br/>
[User Tables](#user-tables)<br/>

# Big Tree Tables
| Table Name | Description | Deprecated |
|--|:--|:-:|
| [bt_person_org](#bt_person_org) | TODO | true |
| [big_tree](#big_tree) | TODO | true |
| [bt_person](#bt_person) | TODO | false |
| [bt_photo_link](#bt_photo_link) | TODO | false |
| [bt_photos](#bt_photos) | TODO | false |
| [bt_nominations](#bt_nominations) | TODO | false |
| [bt_owned_trees](#bt_owned_trees) | TODO | false |
| [bt_tree](#bt_tree) | TODO | false |
| [bt_tree_locations](#bt_tree_locations) | TODO | false |
| [bt_owners](#bt_owners) | TODO | false |
| [bt_nomination_contacts](#bt_nomination_contacts) | TODO | false |

## bt_person_org
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| person_org_id | int | NO | false |
| bt_id | int | NO | false |
| bt_role | varchar(255) | NO | false |
| **Other Attributes** | | | |
| date_created | timestamp | YES | false |
| date_updated | timestamp | YES | false |

## big_tree
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| tree_id | int | NO | false |
| girth | int | YES | false |
| height | int | YES | false |
| crown_width | int | YES | false |
| date_measured | date | YES | false |
| latitude | decimal(9,7) | YES | false |
| longitude | decimal(10,7) | YES | false |
| location | tinytext | YES | false |
| county | tinytext | YES | false |
| national_champion | tinyint(1) | YES | false |
| co_champion | tinyint(1) | YES | false |
| approval_status | tinyint(1) | YES | false |
| date_created | timestamp | YES | false |
| date_updated | timestamp | YES | false |

## bt_person
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| person_id | int | NO | false |
| bt_id | int | NO | false |
| bt_role | varchar(255) | NO | false |

## bt_photo_link
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| bt_id | int | YES | false |
| link | text | YES | false |
| file_name | text | YES | false |
| credit | text | YES | false |
| sequence | int | YES | false |

## bt_photos
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Foreign Keys** | | | |
| nom_id | int | NO | false |
| **Other Attributes** | | | |
| link | text | NO | false |
| file_name | text | NO | false |
| credit | text | NO | false |
| sequence | int | NO | false |

## bt_nominations
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Foreign Keys** | | | |
| bt_id | int | NO | false |
| nom_contact_id | int | YES | false |
| **Other Attributes** | | | |
| measurer_names | text | NO | false |
| nominator_names | text | NO | false |
| date_measured | date | YES | false |
| date_created | timestamp | YES | false |
| date_updated | timestamp | YES | false |

## bt_owned_trees
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| bt_id | int | NO | false |
| own_id | int | NO | false |

## bt_tree
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| girth | int | NO | false |
| height | int | NO | false |
| crown_width | int | NO | false |
| points | float | NO | false |
| national_champion | tinyint(1) | NO | false |
| state_champion | tinyint(1) | NO | false |
| co_champion | tinyint(1) | NO | false |
| approval_status | tinyint(1) | NO | false |
| dead | tinyint(1) | NO | false |
| dethroned | tinyint(1) | NO | false |
| notes | text | YES | false |

## bt_tree_locations
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| bt_id | int | NO | false |
| **Other Attributes** | | | |
| latitude | decimal(9,7) | NO | false |
| longitude | decimal(10,7) | NO | false |
| location | text | NO | false |
| county | tinytext | NO | false |
| hidden | tinyint(1) | NO | false |
| property_type | enum('public','private','unknown') | NO | false |

## bt_owners
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| name | tinytext | NO | false |
| address | tinytext | NO | false |
| city | tinytext | NO | false |
| zip | varchar(10) | NO | false |
| state | tinytext | NO | false |
| phone | varchar(31) | NO | false |
| email | tinytext | NO | false |

## bt_nomination_contacts
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| name | tinytext | NO | false |
| address | tinytext | NO | false |
| city | tinytext | NO | false |
| zip | varchar(10) | NO | false |
| state | tinytext | NO | false |
| phone | varchar(31) | NO | false |
| email | tinytext | NO | false |


# List Tables
| Table Name | Description | Deprecated |
|--|:--|:-:|
| [user_role_list](#user_role_list) | TODO | false |
| [list](#list) | TODO | false |
| [tree_list](#tree_list) | TODO | false |
| [list_description_map](#list_description_map) | TODO | false |
| [saved_search](#saved_search) | TODO | false |
| [list_descriptors](#list_descriptors) | TODO | false |

## user_role_list
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| user_id | int | NO | false |
| list_id | int | NO | false |
| **Other Attributes** | | | |
| role | enum('Admin','Collaborator','Follower') | NO | false |

## list
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| list_id | int | NO | false |
| **Other Attributes** | | | |
| description | varchar(255) | NO | false |
| name | varchar(255) | NO | false |
| date_created | timestamp | YES | false |
| date_updated | timestamp | YES | false |
| type | enum('Curated List','Saved Search','Inventory') | YES | false |
| isPublic | tinyint(1) | YES | false |
| banned | tinyint(1) | NO | false |

## tree_list
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| list_id | int | NO | false |
| position | int | NO | false |
| **Other Attributes** | | | |
| tree_id | int | NO | false |

## list_description_map
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| list_id | int | NO | false |
| list_descriptors_id | int | NO | false |

## saved_search
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| list_id | int | NO | false |
| **Other Attributes** | | | |
| query_data | text | YES | false |

## list_descriptors
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| type | enum('category','keyword','region') | NO | false |
| descriptor | varchar(255) | NO | false |


# Tree Information Tables
| Table Name | Description | Deprecated |
|--|:--|:-:|
| [tree](#tree) | TODO | false |
| [photo](#photo) | TODO | false |
| [salinity_tolerance](#salinity_tolerance) | TODO | false |
| [landscape_application](#landscape_application) | TODO | false |
| [soil_texture](#soil_texture) | TODO | false |
| [leafshapes](#leafshapes) | TODO | false |
| [litter_type](#litter_type) | TODO | false |
| [facets](#facets) | TODO | false |
| [flower_time](#flower_time) | TODO | false |
| [health_hazard](#health_hazard) | TODO | false |
| [taxon](#taxon) | TODO | false |
| [fruit_value](#fruit_value) | TODO | false |
| [generic_common](#generic_common) | TODO | false |
| [hybrid](#hybrid) | TODO | false |
| [pest_resistant](#pest_resistant) | TODO | false |
| [disease_susceptibility](#disease_susceptibility) | TODO | false |
| [usda_zone](#usda_zone) | TODO | false |
| [disease_resistant](#disease_resistant) | TODO | false |
| [flower_color](#flower_color) | TODO | false |
| [attracts_wildlife](#attracts_wildlife) | TODO | false |
| [photo_status](#photo_status) | TODO | false |
| [pest_susceptibility](#pest_susceptibility) | TODO | false |
| [zip_code_climate_zones](#zip_code_climate_zones) | TODO | false |
| [tree_shape](#tree_shape) | TODO | false |
| [preferred_common](#preferred_common) | TODO | false |
| [fruiting_time](#fruiting_time) | TODO | false |
| [landscape_use](#landscape_use) | TODO | false |
| [foliage_growth_color](#foliage_growth_color) | TODO | false |
| [climate_zones](#climate_zones) | TODO | false |
| [common](#common) | TODO | false |
| [photo_link](#photo_link) | TODO | false |
| [generalnativerange](#generalnativerange) | TODO | false |
| [facets_tree_match](#facets_tree_match) | TODO | false |
| [sunset_zone](#sunset_zone) | TODO | false |
| [bark_texture](#bark_texture) | TODO | false |

## tree
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| scientific_name | text | YES | false |
| family | varchar(255) | YES | false |
| family_previous | tinytext | YES | false |
| soil_ph_low | tinyint | YES | false |
| soil_ph_high | tinyint | YES | false |
| exposure_low | tinyint | YES | false |
| exposure_high | tinyint | YES | false |
| native_range | text | YES | false |
| growth_rate_low | tinyint | YES | false |
| growth_rate_high | tinyint | YES | false |
| foliage_type_low | tinytext | YES | false |
| foliage_type_high | tinytext | YES | false |
| foliage_fall_color | tinyint(1) | YES | false |
| fruiting_habit | tinytext | YES | false |
| fruit_size | tinytext | YES | false |
| fruit_color | tinytext | YES | false |
| fruit_type | tinytext | YES | false |
| flower_showiness | tinytext | YES | false |
| bark_color | tinytext | YES | false |
| branch_strength_low | tinytext | YES | false |
| branch_strength_high | tinytext | YES | false |
| armament | tinyint(1) | YES | false |
| fragrance | tinyint(1) | YES | false |
| biogenic_emissions | tinytext | YES | false |
| deer_palatable | tinyint(1) | YES | false |
| saltspray_tolerance | tinytext | YES | false |
| root_damage_potential | tinytext | YES | false |
| memo | text | YES | false |
| photolocations | text | YES | false |
| low_zone | tinyint(1) | YES | false |
| medium_zone | tinyint(1) | YES | false |
| pacific_island | tinyint(1) | YES | false |
| lastedited | tinytext | YES | false |
| ca_invasive | tinyint(1) | YES | false |
| invasive_text | varchar(1500) | YES | false |
| height_low | smallint | YES | false |
| height_high | smallint | YES | false |
| height_memo | tinytext | YES | false |
| width_low | smallint | YES | false |
| width_high | smallint | YES | false |
| tropical | tinyint(1) | YES | false |
| sex | tinyint | YES | false |
| display | tinyint(1) | NO | false |
| redirect | smallint | YES | false |
| california_native | tinyint(1) | YES | false |
| planting_area | tinytext | YES | false |
| pi_invasive | tinyint(1) | YES | false |
| water_use | tinytext | YES | false |
| leaf_arrangement | tinytext | YES | false |
| leaf_form | tinytext | YES | false |
| leaflet_shape | tinytext | YES | false |
| general_native_range | tinytext | YES | false |
| hi_native | tinyint(1) | YES | false |
| ethnobotanical_info | text | NO | false |
| powerline_friendly | tinyint(1) | YES | false |
| foliage_type | tinytext | YES | false |
| schoolyard | int | NO | false |

## photo
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Other Attributes** | | | |
| id | int | YES | false |
| tree_id | int | YES | false |
| attribute_name | text | YES | false |
| credit | text | YES | false |
| image_order | int | YES | false |

## salinity_tolerance
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| salinity_tolerance_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| salinity_tolerance | tinytext | NO | false |

## landscape_application
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| landscape_application_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| landscape_application | tinytext | NO | false |

## soil_texture
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| soil_texture_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| soil_texture | tinytext | NO | false |

## leafshapes
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Other Attributes** | | | |
| ID | int | YES | false |
| Leaflet_Shape | text | YES | false |
| Leaf_Arrangement | text | YES | false |
| Leaf_Form | text | YES | false |

## litter_type
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| litter_type_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| litter_type | tinytext | NO | false |

## facets
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| facets_id | int | NO | false |
| **Other Attributes** | | | |
| facets_text | varchar(64) | NO | false |

## flower_time
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| flower_time_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| flower_time | tinytext | NO | false |

## health_hazard
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| health_hazard_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| health_hazard | tinytext | NO | false |

## taxon
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| taxon_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| genus | varchar(255) | YES | false |
| species | varchar(255) | YES | false |
| hybrid_alt_species | varchar(255) | YES | false |
| subspecies | varchar(255) | YES | false |
| variety | varchar(255) | YES | false |
| cultivar | varchar(255) | YES | false |
| hybrid_x | tinytext | YES | false |
| name_concat | tinytext | YES | false |
| name_unformatted | varchar(255) | YES | false |
| sequence | tinyint | NO | false |

## fruit_value
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| fruit_value_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| fruit_value | tinytext | NO | false |

## generic_common
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| generic_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| generic | varchar(255) | YES | false |

## hybrid
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| hybrid_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| genus_parent1 | tinytext | YES | false |
| species_parent1 | tinytext | YES | false |
| genus_parent2 | tinytext | YES | false |
| species_parent2 | tinytext | YES | false |

## pest_resistant
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| pest_resistant_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| pest_resistant | tinytext | NO | false |

## disease_susceptibility
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| disease_susceptibility_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| disease_susceptibility | tinytext | NO | false |

## usda_zone
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| usda_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| usda_zone | tinyint | NO | false |

## disease_resistant
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| disease_resistant_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| disease_resistant | tinytext | NO | false |

## flower_color
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| flower_color_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| flower_color | tinytext | NO | false |

## attracts_wildlife
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| attracts_wildlife_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| attracts_wildlife | tinytext | NO | false |

## photo_status
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| photo_status_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| tree | tinytext | YES | false |
| leaves | tinytext | YES | false |
| flower | tinytext | YES | false |
| fruit | tinytext | YES | false |
| bark | tinytext | YES | false |

## pest_susceptibility
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| pest_susceptibility_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| pest_susceptibility | tinytext | NO | false |

## zip_code_climate_zones
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| zip_code_climate_zones_id | int | NO | false |
| **Foreign Keys** | | | |
| climate_zones_id | int | YES | false |
| **Other Attributes** | | | |
| zip_code | int | YES | false |
| match_value | int | YES | false |

## tree_shape
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| tree_shape_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| tree_shape | tinytext | NO | false |

## preferred_common
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| tree_id | int | NO | false |
| common_id | int | NO | false |
| **Other Attributes** | | | |
| common_name | varchar(255) | YES | false |

## fruiting_time
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| fruiting_time_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| fruiting_time | tinytext | NO | false |

## landscape_use
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| landscape_use_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| landscape_use | tinytext | NO | false |

## foliage_growth_color
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| foliage_growth_color_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| foliage_growth_color | tinytext | NO | false |

## climate_zones
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| climate_zones_id | int | NO | false |
| **Other Attributes** | | | |
| climate_zone | varchar(64) | NO | false |

## common
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| common_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| common | varchar(255) | YES | false |
| sequence | tinyint | YES | false |
| displayed_alt_common | tinyint | YES | false |
| display_order | int | YES | false |

## photo_link
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| photo_link_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| link | text | YES | false |
| file_name | text | YES | false |
| attribute_name | tinytext | YES | false |
| credit | text | YES | false |
| sequence | int | YES | false |

## generalnativerange
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Other Attributes** | | | |
| ID | int | YES | false |
| NativeRange | text | YES | false |

## facets_tree_match
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| facets_tree_match_id | int | NO | false |
| **Foreign Keys** | | | |
| facets_id | int | YES | false |
| tree_id | int | YES | false |
| climate_zones_id | int | YES | false |
| **Other Attributes** | | | |
| match_value | int | YES | false |

## sunset_zone
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| sunset_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| sunset_zone | tinytext | NO | false |

## bark_texture
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| bark_texture_id | int | NO | false |
| **Foreign Keys** | | | |
| tree_id | int | NO | false |
| **Other Attributes** | | | |
| bark_texture | tinytext | NO | false |


# UFAT Tables
| Table Name | Description | Deprecated |
|--|:--|:-:|


# Misc
| Table Name | Description | Deprecated |
|--|:--|:-:|
| [knex_migrations](#knex_migrations) | TODO | false |
| [quotes](#quotes) | TODO | false |
| [quote](#quote) | TODO | false |
| [knex_migrations_lock](#knex_migrations_lock) | TODO | false |

## knex_migrations
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int unsigned | NO | false |
| **Other Attributes** | | | |
| name | varchar(255) | YES | false |
| batch | int | YES | false |
| migration_time | timestamp | YES | false |

## quotes
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Other Attributes** | | | |
| quote | text | YES | false |
| author | text | YES | false |

## quote
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| quote_id | int | NO | false |
| **Other Attributes** | | | |
| quote | text | YES | false |
| author | tinytext | YES | false |

## knex_migrations_lock
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| index | int unsigned | NO | false |
| **Other Attributes** | | | |
| is_locked | int | YES | false |


# User Tables
| Table Name | Description | Deprecated |
|--|:--|:-:|
| [nurseries](#nurseries) | TODO | false |
| [notifications](#notifications) | TODO | false |
| [role](#role) | TODO | false |
| [person](#person) | TODO | false |
| [users](#users) | TODO | false |
| [user_nurseries](#user_nurseries) | TODO | false |
| [person_org](#person_org) | TODO | true |
| [user_notifications](#user_notifications) | TODO | false |
| [user](#user) | TODO | true |

## nurseries
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| org_name | tinytext | NO | false |
| website_name | tinytext | YES | false |
| website_link | text | YES | false |
| email | tinytext | YES | false |
| phone | varchar(31) | YES | false |
| verified | tinyint(1) | YES | false |

## notifications
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| notification_type | enum('Delete','Update') | NO | false |
| message | text | NO | false |

## role
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| role_id | int | NO | false |
| **Other Attributes** | | | |
| role_name | varchar(255) | NO | false |

## person
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| user_id | int | YES | false |
| first_name | tinytext | YES | false |
| last_name | tinytext | YES | false |
| middle_name | tinytext | YES | false |
| post_nominal | tinytext | YES | false |
| use_post_nominal | tinyint(1) | YES | false |
| address | tinytext | YES | false |
| city | tinytext | YES | false |
| state | tinytext | YES | false |
| zip | int | YES | false |
| phone | tinytext | YES | false |
| email | tinytext | YES | false |
| date_created | timestamp | YES | false |
| date_updated | timestamp | YES | false |

## users
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Foreign Keys** | | | |
| role_id | int | NO | false |
| **Other Attributes** | | | |
| first_name | tinytext | NO | false |
| last_name | tinytext | NO | false |
| email | varchar(255) | NO | false |
| password | tinytext | NO | false |
| show_first_name | tinyint(1) | NO | false |
| show_last_name | tinyint(1) | NO | false |
| show_email | tinyint(1) | NO | false |
| email_notifications | tinyint(1) | NO | false |
| app_notifications | tinyint(1) | NO | false |
| date_created | timestamp | NO | false |
| verified | tinyint(1) | NO | false |
| banned | tinyint(1) | NO | false |

## user_nurseries
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| user_id | int | NO | false |
| nursery_id | int | NO | false |

## person_org
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| id | int | NO | false |
| **Other Attributes** | | | |
| name | tinytext | YES | false |
| address | tinytext | YES | false |
| city | tinytext | YES | false |
| state | tinytext | YES | false |
| zip | varchar(10) | YES | false |
| phone | tinytext | YES | false |
| email | tinytext | YES | false |
| date_created | timestamp | YES | false |
| date_updated | timestamp | YES | false |

## user_notifications
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| notification_id | int | NO | false |
| user_id | int | NO | false |

## user
| Attribute Name | Attribute Type | Nullable | Deprecated |
|:--|:--|:-:|:-:|
| **Primary Keys** | | | |
| user_id | int | NO | false |
| **Other Attributes** | | | |
| first_name | tinytext | NO | false |
| last_name | tinytext | NO | false |
| post_nominal | tinytext | YES | false |
| email | varchar(255) | NO | false |
| password | tinytext | NO | false |
| role_id | int | NO | false |
| organization | tinytext | YES | false |
| state | tinytext | YES | false |
