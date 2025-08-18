---
{
    "name": "RGB-D",
    "aliases": [],
    "year": 2014,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Basler acA1300-200um",
        "OptiTrack V100:R2"
    ],
    "category": "Visual Navigation",
    "subcategory": [
        "Visual Place Recognition",
        "SLAM"
    ],
    "task": "SLAM",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "TSV"
        ],
        "availability_comment": "Datasets compressed using 7zip.",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "http://ci.nst.ei.tum.de/EBSLAM3D/dataset/",
                "format": "TSV",
                "available": true
            }
        ],
        "size_gb": 10.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-based 3D SLAM with a depth-augmented dynamic vision sensor",
        "doi": "10.1109/ICRA.2014.6906882",
        "authors": [
            "David Weikersdorfer",
            "David B. Adrian",
            "Daniel Cremers",
            "Jorg Conradt"
        ],
        "abstract": "We present the D-eDVS\u2013 a combined event-based 3D sensor \u2013 and a novel event-based full-3D simultaneous localization and mapping algorithm which works exclusively with the sparse stream of visual data provided by the D-eDVS. The D-eDVS is a combination of the established PrimeSense RGBD sensor and a biologically inspired embedded dynamic vision sensor. Dynamic vision sensors only react to dynamic contrast changes and output data in form of a sparse stream of events which represent individual pixel locations. We demonstrate how an event-based dynamic vision sensor can be fused with a classic frame-based RGB-D sensor to produce a sparse stream of depth-augmented 3D points. The advantages of a sparse, event-based stream are a much smaller amount of generated data, thus more ef\ufb01cient resource usage, and a continuous representation of motion allowing lag-free tracking. Our eventbased SLAM algorithm is highly ef\ufb01cient and runs 20 times faster than realtime, provides localization updates at several hundred Hertz, and produces excellent results. We compare our method against ground truth from an external tracking system and two state-of-the-art algorithms on a new dataset which we release in combination with this paper.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 91,
            "updated": "2025-06-12T09:19:14.102602"
        },
        {
            "source": "scholar",
            "count": 179,
            "updated": "2025-06-12T09:19:13.934272"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://ebvds.neurocomputing.systems/EBSLAM3D/index.html"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/6906882"
        },
        {
            "type": "project_page",
            "url": "https://ebvds.neurocomputing.systems/EBSLAM3D/index.html"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "5",
        "num_recordings": "26",
        "stereo": false
    },
    "bibtex": {
        "pages": "359--364",
        "year": 2014,
        "month": "may",
        "author": "Weikersdorfer, David and Adrian, David B. and Cremers, Daniel and Conradt, Jorg",
        "publisher": "IEEE",
        "booktitle": "2014 {IEEE} {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/ICRA.2014.6906882",
        "url": "http://ieeexplore.ieee.org/document/6906882/",
        "isbn": "978-1-4799-3685-4",
        "title": "Event-based {3D} {SLAM} with a depth-augmented dynamic vision sensor",
        "address": "Hong Kong, China",
        "type": "inproceedings",
        "key": "weikersdorfer_event-based_2014"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.1023/A:1008078328650",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2012.6491077",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-39402-7_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2011.5995316",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISMAR.2011.6092378",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2009.5457625",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2006.889486",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "title": "Fastslam: A factored solution to the simultaneous localization and mapping problem",
            "source": "crossref"
        },
        {
            "title": "Real-time camera tracking and 3d reconstruction using signed distance functions",
            "source": "crossref"
        },
        {
            "title": "Dense visual slam for rgbd cameras",
            "source": "crossref"
        },
        {
            "title": "Rao-blackwellized partcile filtering for dynamic bayesian networks",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure

The dataset contains of 5 scenarios with a total of 26 takes. Each take corresponds to one path and is between 20 to 60 seconds long. For each take the following data is provided:

- **events.tsv**: A TSV file where each row corresponds to one event. Provided data is: PrimeSense image coordinates (x,y), PrimeSense depth measurement, EDVS image coordinates (x,y), Timestamp (in microsenconds), EDVS parity flag.
- **events_pe.tsv**: A TSV file where each row corresponds to one 3D point event. Provided data is: Timestamp (microseconds), 3D point in camera coordinates (x,y,z).
- **gt.bvh**: Ground truth data from an external tracking system in the BVH motion tracking file format.
- **depth (folder)**: Folder with depth frames. Each frame is saved as one file. Frames are stored as binary dumps in row-major format. For each pixel a 16-bit integer is stored indicating the pixel depth.
- **rgb (folder)**: Folder with color frames. Each frame is saved as one file. Frames are stored as binary dumps in row-major format. For each pixel three 8-bit integers are stored indicating the red, green and blue color value for the pixel.

| **Scenario** | **Take** | **RGB-D Format** | **Duration** | **Frames (color/depth)** | **Events** | **Link**                                                      | **Size**  |
| ------------ | -------- | ---------------- | ------------ | ------------------------ | ---------- | ------------------------------------------------------------- | --------- |
| 1            | 1        | 320x240@60Hz     | 30.9         | 1871 / 1856              | 1456422    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn1_take01.7z  | 264.30 MB |
| 2            | 1        | 640x480@30Hz     | 25           | 749 / 752                | 984609     | https://ebvds.neurocomputing.systems/EBSLAM3D/scn2c_take01.7z | 279.03 MB |
| 2            | 2        | 640x480@30Hz     | 24.8         | 740 / 743                | 1228999    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn2c_take02.7z | 300.90 MB |
| 2            | 3        | 640x480@30Hz     | 25.3         | 755 / 758                | 1420190    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn2c_take03.7z | 294.38 MB |
| 2            | 4        | 640x480@30Hz     | 25.2         | 753 / 755                | 1303302    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn2c_take04.7z | 294.07 MB |
| 3            | 1        | 640x480@30Hz     | 25.1         | 750 / 753                | 1811233    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take01.7z  | 325.12 MB |
| 3            | 2        | 640x480@30Hz     | 25.1         | 750 / 752                | 1822262    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take02.7z  | 315.70 MB |
| 3            | 3        | 640x480@30Hz     | 36.8         | 1100 / 1104              | 2750400    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take03.7z  | 469.45 MB |
| 3            | 4        | 640x480@30Hz     | 35.3         | 984 / 985                | 2739406    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take04.7z  | 429.13 MB |
| 3            | 5        | 640x480@30Hz     | 36.8         | 1101 / 1105              | 2475213    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take05.7z  | 467.38 MB |
| 3            | 6        | 640x480@30Hz     | 46.9         | 1402 / 1408              | 3260258    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take06.7z  | 590.78 MB |
| 3            | 7        | 640x480@30Hz     | 50.3         | 1504 / 1510              | 2805818    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take07.7z  | 647.48 MB |
| 3            | 8        | 640x480@30Hz     | 46.9         | 1401 / 1407              | 2046209    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn3_take08.7z  | 584.36 MB |
| 7            | 1        | 640x480@30Hz     | 23.5         | 703 / 706                | 1341056    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take01.7z  | 279.24 MB |
| 7            | 2        | 640x480@30Hz     | 21.5         | 642 / 644                | 1340804    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take02.7z  | 261.76 MB |
| 7            | 3        | 640x480@30Hz     | 30.6         | 916 / 919                | 1769307    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take03.7z  | 364.35 MB |
| 7            | 4        | 640x480@30Hz     | 31.9         | 952 / 956                | 2203772    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take04.7z  | 393.61 MB |
| 7            | 5        | 640x480@30Hz     | 61.7         | 1838 / 1849              | 1645344    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take05.7z  | 738.88 MB |
| 7            | 6        | 640x480@30Hz     | 61.9         | 1847 / 1855              | 1469080    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take06.7z  | 734.29 MB |
| 7            | 7        | 640x480@30Hz     | 42           | 1255 / 1260              | 1077844    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take07.7z  | 472.20 MB |
| 7            | 8        | 640x480@30Hz     | 61.9         | 1847 / 1855              | 1680188    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn7_take08.7z  | 713.36 MB |
| 8            | 1        | 640x480@30Hz     | 27.5         | 823 / 826                | 1603852    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn8_take01.7z  | 359.87 MB |
| 8            | 2        | 640x480@30Hz     | 27.3         | 815 / 818                | 1545613    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn8_take02.7z  | 360.62 MB |
| 8            | 3        | 640x480@30Hz     | 30.5         | 912 / 914                | 1081577    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn8_take03.7z  | 376.07 MB |
| 8            | 4        | 640x480@30Hz     | 28.4         | 849 / 853                | 1143159    | https://ebvds.neurocomputing.systems/EBSLAM3D/scn8_take04.7z  | 346.28 MB |