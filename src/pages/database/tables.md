---
layout: "./src/layouts/Markdown.astro"
title: "Database Documentation"
---

## Table Groups
[Tree Tables](#tree-information)<br/>
[User Tables](#user-tables)<br/>
[List Tables](#list-tables)<br/>
[BigTree Tables](#bigtree-tables)<br/>
[Misc Tables](#misc-tables)<br/>


## Tree Information
| Table Name        | Description               | Deprecated |
|-------------------|:--------------------------|:----------:|
| [common]()  |Common names of trees      | No
| [attracts_wildlife]()  |TODO (Logan)| No
| [bark_texture]()  |TODO (Logan)| No
| [climate_zones]()  |TODO (Logan)| No
| [disease_resistant]()  |TODO (Logan)| No
| [disease_susceptibility]()  |TODO (Logan)| No
| [facets]()|TODO (Logan)|No
| [facets_tree_match]()|TODO (Logan)|No
| [flower_color]()|TODO (Logan)|No
| [flower_time]()|TODO (Logan)|No
| [foliage_growth_color]()|TODO (Logan)|No
| [fruit_value]()|TODO (Logan)|No
| [fruiting_time]()|TODO (Logan)|No
| [generalnativerange]()|TODO (Logan)|No
| [generic_common]()|TODO (Logan)|No
| [health_hazard]()|TODO (Logan)|No
| [hybrid]()|TODO (Logan)|No
| [landscape_application]()|TODO (Logan)|No
| [landscape_use]()|TODO (Logan)|No
| [leafshapes]()|TODO (Logan)|No
| [litter_type]()|TODO (Logan)|No
| [notifications]()|TODO (Logan)|No
| [person]()|TODO (Logan)|Yes
| [person_org]()|TODO (Logan)|Yes
| [pest_resistant]()|TODO (Logan)|No
| [pest_susceptibility]()|TODO (Logan)|No
| [photo]()|TODO (Logan)|Yes
| [photo_link]()|TODO (Logan)|No
| [photo_status]()|TODO (Logan)|No
| [preferred_common]()|TODO (Logan)|No
| [quote]()|TODO (Logan)|No
| [quotes]()|TODO (Logan)|No
| [salinity_tolerance]()|TODO (Logan)|No
| [soil_texture]()|TODO (Logan)|No
| [sunset_zone]()|TODO (Logan)|No
| [taxon]()|TODO (Logan)|No
| [tree]()|TODO (Logan)|No
| [tree_shape]()|TODO (Logan)|No
| [usda_zone]()|TODO (Logan)|No
| [zip_code_climate_zones]()|TODO (Logan)|No

## User Tables 
| Table Name        | Description               | Deprecated |
|-------------------|:--------------------------|:----------:|
| [role](./tables/roles)|Types of user permissons   | No
| [user]()|TODO (Logan)|No
| [user_notifications]()|TODO (Logan)|No
| [user_nurseries]()|TODO (Logan)|No
| [user_role_list]()|TODO (Logan)|No
| [users]()|TODO (Logan)|No

## Role 
| Attribute Name | Type | Not Null | Deprecated | Needs Translation |
|----------------|:----:|:--------:|:----------:|:-----------------:|
|**Primary Key**|||||
|role_id|`int`| Yes | No | No |
|**Other Attributes**|||||
|role_name|`unique varchar(255)`| Yes| No | No |

## List Tables 
| Table Name        | Description               | Deprecated |
|-------------------|:--------------------------|:----------:|
| [list]()|TODO (Logan)|No
| [list_description_map]()|TODO (Logan)|No
| [list_descriptors]()|TODO (Logan)|No
| [nurseries]()|TODO (Logan)|No
| [saved_search]()|TODO (Logan)|No
| [tree_list]()|TODO (Logan)|No

## BigTree Tables 
| Table Name        | Description               | Deprecated |
|-------------------|:--------------------------|:----------:|
| [big_tree]()|TODO (Logan)|Yes
| [bt_nomination_contacts]()|TODO (Logan)|No
| [bt_nominations]()|TODO (Logan)|No
| [bt_owned_trees]()|TODO (Logan)|No
| [bt_owners]()|TODO (Logan)|No
| [bt_person]()|TODO (Logan)|Yes
| [bt_person_org]()|TODO (Logan)|Yes
| [bt_photo_link]()|TODO (Logan)|Yes
| [bt_photos]()|TODO (Logan)|No
| [bt_tree]()|TODO (Logan)|No
| [bt_tree_locations]()|TODO (Logan)|No


## Misc Tables 
| Table Name        | Description               | Deprecated |
|-------------------|:--------------------------|:----------:|
| [knex_migrations]()|TODO (Logan)|No
| [knex_migrations_lock]()|TODO (Logan)|No

