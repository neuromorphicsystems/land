---
{
    "name": "Tunnel Dataset",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "subcategory": [
        "Pedestrian Detection",
        "Human Action Recognition",
        "Surveillance"
    ],
    "task": "Railway Tunnel Intrusion Detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "Compressed with lrzip. The full unlabeled data or specific scenarios can be obtained by contacting the first author.",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://hs-niederrhein.sciebo.de/s/LKf15dW4hmrVMhC",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 10.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Intrusion Detection at Railway Tunnel Entrances Using Dynamic Vision Sensors",
        "doi": "10.5220/0012558600003654",
        "authors": [
            "Colin Gebler",
            "Regina Pohle-Fr\u00f6hlich"
        ],
        "abstract": "The surveillance of railway tunnel entrances is integral to ensure the security of both people and infrastructure. Since 24/7 personal surveillance is not economically possible, it falls to automated solutions to ensure that no persons can intrude unseen. We investigate the use of Dynamic Vision Sensors in fulfilling this task. A Dynamic Vision Sensor differs from a traditional frame-based camera in that it does not record entire images at a fixed rate. Instead, each pixel outputs events independently and asynchronously whenever a change in brightness occurs at that location. We present a dataset recorded over three months at a railway tunnel entrance, with relevant examples assigned labeled as featuring or not featuring intrusions. Furthermore, we investigate intrusion detection by using neural networks to perform image classification on images generated from the event stream using established methods to represent the temporal information in that format. Of the models tested, MobileNetV2 achieved the best result with a classification accuracy of 99 . 55% on our dataset when differentiating between Event Volumes that do or do not contain people.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-29T07:36:37.801865"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://pdfs.semanticscholar.org/7738/2e24a3d7e243184121f569d4a9ec7ef56093.pdf"
        },
        {
            "type": "paper",
            "url": "https://www.hs-niederrhein.de/fileadmin/dateien/Institute_und_Kompetenzzentren/iPattern/selfarchived/gebler-ipra2024.pdf#page=3.47"
        },
        {
            "type": "github_page",
            "url": "https://github.com/TuNuKi-DVS/intrusion-railway-dvs"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "902--909",
        "year": 2024,
        "author": "Gebler, Colin and Pohle-Fr\u00f6hlich, Regina",
        "publisher": "SCITEPRESS - Science and Technology Publications",
        "booktitle": "Proceedings of the 13th {International} {Conference} on {Pattern} {Recognition} {Applications} and {Methods}",
        "urldate": "2024-09-13",
        "language": "en",
        "doi": "10.5220/0012558600003654",
        "url": "https://www.scitepress.org/DigitalLibrary/Link.aspx?doi=10.5220/0012558600003654",
        "shorttitle": "Intrusion {Detection} at {Railway} {Tunnel} {Entrances} {Using} {Dynamic} {Vision} {Sensors}",
        "isbn": "978-989-758-684-2",
        "title": "Intrusion {Detection} at {Railway} {Tunnel} {Entrances} {Using} {Dynamic} {Vision} {Sensors}:",
        "address": "Rome, Italy",
        "type": "inproceedings",
        "key": "gebler_intrusion_2024"
    },
    "referenced_papers": []
}
---


### Dataset Structure 

The labeled dataset can be found at [https://hs-niederrhein.sciebo.de/s/LKf15dW4hmrVMhC](https://hs-niederrhein.sciebo.de/s/LKf15dW4hmrVMhC) . The dataset is compressed using lrzip. The included scripts can be used to generate hdf5 files when OpenEB ( [https://github.com/prophesee-ai/openeb](https://github.com/prophesee-ai/openeb) ) is installed. see the script contents for more info. 

If you are interested in the full unlabeled data or specific scenarios please contact the first author.