---
{
    "name": "ViViD++",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer",
        "DAVIS240"
    ],
    "other_sensors": [
        "FLIR A65 Thermal",
        "Asus Xtion Pro Live",
        "Flea3 FL-U3-13E4C-C RGB",
        "NovAtel Pwrpak7 E-1",
        "Velodyne VLP-16"
    ],
    "category": "Visual Navigation",
    "tags": [
        "SLAM",
        "Visual Odometry",
        "Visual Place Recognition"
    ],
    "description": "Alternative vision sensor dataset (SLAM in poor visibility)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download",
            "Google Drive"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "Download link available on request",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://urserver.kaist.ac.kr/publicdata/ViViD++/download_links.txt",
                "format": "ROSbag",
                "available": true
            },
            {
                "name": "Google Drive",
                "url": "https://urserver.kaist.ac.kr/publicdata/ViViD++/download_links.txt",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 1280.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "ViViD++ : Vision for Visibility Dataset",
        "doi": "10.1109/LRA.2022.3168335",
        "authors": [
            "Alex Junho Lee",
            "Younggun Cho",
            "Young-sik Shin",
            "Ayoung Kim",
            "Hyun Myung"
        ],
        "abstract": "In this letter, we present a dataset capturing diverse visual data formats that target varying luminance conditions. While RGB cameras provide nourishing and intuitive information, changes in lighting conditions potentially result in catastrophic failure for robotic applications based on vision sensors. Approaches overcoming illumination problems have included developing more robust algorithms or other types of visual sensors, such as thermal and event cameras. Despite the alternative sensors\u2019 potential, there still are few datasets with alternative vision sensors. Thus, we provided a dataset recorded from alternative vision sensors, by handheld or mounted on a car, repeatedly in the same space but in different conditions. We aim to acquire visible information from co-aligned alternative vision sensors. Our sensor system collects data more independently from visible light intensity by measuring the amount of infrared dissipation, depth by structured re\ufb02ection, and instantaneous temporal changes in luminance. We provide these measurements along with inertial sensors and ground-truth for developing robust visual SLAM under poor illumination.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 55,
            "updated": "2025-06-05T22:11:19.746645"
        },
        {
            "source": "scholar",
            "count": 93,
            "updated": "2025-06-05T22:11:18.898677"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2204.06183"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/9760091"
        },
        {
            "type": "project_page",
            "url": "https://visibilitydataset.github.io/"
        }
    ],
    "full_name": "Vision for Visibility Dataset (ViViD)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "6282--6289",
        "year": 2022,
        "month": "jul",
        "author": "Lee, Alex Junho and Cho, Younggun and Shin, Young-sik and Kim, Ayoung and Myung, Hyun",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2023-09-05",
        "number": "3",
        "language": "en",
        "doi": "10.1109/LRA.2022.3168335",
        "url": "https://ieeexplore.ieee.org/document/9760091/",
        "shorttitle": "{ViViD}++",
        "issn": "2377-3766, 2377-3774",
        "volume": "7",
        "title": "{ViViD}++ : {Vision} for {Visibility} {Dataset}",
        "type": "article",
        "key": "Lee2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/IROS.2012.6385773",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915620033",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3075141",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.350",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364919843996",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6907054",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.292",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793887",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3025505",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2018.2791533",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364915614638",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2014.07.004",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593953",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2011.5979561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2012.6225005",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.121791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593941",
            "source": "crossref"
        },
        {
            "doi": "10.1177/02783649922066213",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-67361-5_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9635907",
            "source": "crossref"
        },
        {
            "title": "InteriorNet: Mega-scale multi-sensor photo-realistic indoor scenes dataset",
            "source": "crossref"
        },
        {
            "title": "A 240 180 10 mw 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "Towards robust night and day place recognition using visible and thermal imaging",
            "source": "crossref"
        },
        {
            "title": "A photometrically calibrated benchmark for monocular visual odometry",
            "source": "crossref"
        },
        {
            "title": "Effects of multipath reception on GPS positioning performance",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Dataset sizes:
  - Driving dataset: 435 Gb
  - Driving vision: 796 Gb
  - Handheld outdoor: 32.83 Gb
  - Handheld indoor: 15.51 Gb
- Total size: 1279.34 GB

\*\*\* You may select between either from our server or from google drive. \*\*\*
\*\*\* In most cases, google drive's connection speed would be faster. \*\*\*

\*\* Google drive links

- Calibration
  https://drive.google.com/drive/folders/1dWEQn6vC3rILYpdLE8FYeUIJMbeOl5H5?usp=sharing

- Driving - full
  https://drive.google.com/drive/folders/1lYwI3yuMHOoWgBfgCiGbXqBe2_lqIkRv?usp=sharing

- Driving - vision
  https://drive.google.com/drive/folders/14BHz2BvGtcOhBcB2pIjlCUpntbdzIeq\_?usp=sharing

- Handheld - indoor
  https://drive.google.com/drive/folders/113Q4FOST_RchCFLerAp0OdjuCkeFGjES?usp=sharing

- Handheld - outdoor
  https://drive.google.com/drive/folders/1j9AMGQ5VA8Bw5Mbf6QTFNZjF0B95Rvz3?usp=sharing

\*\* Direct Downloads

- Calibration
  https://urserver.kaist.ac.kr/publicdata/ViViD++/calibration/calibration_results.zip

- Driving - full
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/campus_day1.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/campus_day2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/campus_evening.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/campus_night.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/city_day1.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/city_day2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/city_evening.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/city_night.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_day1_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_day1_times.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_day2_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_day2_times.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_evening_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_evening_times.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_night_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/campus_night_times.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_day1_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_day1_times.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_day2_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_day2_times.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_evening_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_evening_times.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_night_optimized_poses.txt
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_full/loamposes/city_night_times.txt

- Driving - vision
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_day1.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_day2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_day2_2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_evening.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_morning.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_morning_2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_morning_manual.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_morning_manual_small.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_night.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/campus_night_2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/city_day1.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/city_day2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/city_evening.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/city_morning.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/city_morning_manual.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/city_night.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/urban_day.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/urban_evening.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/urban_evening_road.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/urban_morning.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/urban_morning_manual.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/driving_vision/urban_night.bag

- Handheld - indoor
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_aggresive_dark_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_aggresive_global_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_aggresive_local_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_robust_dark_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_robust_global_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_robust_local_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_robust_varying_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_unstable_dark_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_unstable_global_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/pose/indoor_unstable_local_gt.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/dark_aggresive.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/dark_robust.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/dark_unstable.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/global_aggresive.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/global_robust.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/global_unstable.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/local_aggressive.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/local_robust.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/local_unstable.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_indoor/varying_robust.bag

- Handheld - outdoor
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/map_outdoor_robust_day1.pcd
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/map_outdoor_robust_day2.pcd
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/map_outdoor_robust_night1.pcd
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/map_outdoor_robust_night2.pcd
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/path_outdoor_robust_day1.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/path_outdoor_robust_day2.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/path_outdoor_robust_night1.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/pose/path_outdoor_robust_night2.csv
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/outdoor_robust_day1.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/outdoor_robust_day2.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/outdoor_robust_night1.bag
  https://urserver.kaist.ac.kr/publicdata/ViViD++/handheld_outdoor/outdoor_robust_night2.bag
