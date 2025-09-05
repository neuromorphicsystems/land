---
{
    "name": "E-M-S",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "Space Datasets",
        "Pose Estimation"
    ],
    "description": "6D pose estimation of spacecraft dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/14774652",
                "format": "CSV",
                "doi": "10.5281/zenodo.14774652",
                "available": true
            }
        ],
        "size_gb": 6.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Cross-modal fusion of monocular images and neuromorphic streams for 6D pose estimation of non-cooperative targets",
        "doi": "10.1016/j.ast.2025.110338",
        "authors": [
            "Wang Yishi",
            "Michele Maestrini",
            "Zhang Zexu",
            "Mauro Massari",
            "Pierluigi Di Lizia"
        ],
        "abstract": "On-orbit servicing and active debris removal of non-cooperative spacecrafts rely on autonomous navigation systems, particularly visual navigation, to perform orbiting and approach maneuvers around the target. Robust pose estimation is a critical technology of visual autonomous navigation, providing position and orientation measurements for navigation filters. Learning-based monocular vision methods have been widely adopted for spacecraft pose estimation tasks, achieving superior performance compared to traditional approaches. However, extreme illumination in space can lead to target texture blurring, thereby reducing the accuracy and robustness of traditional monocular vision systems. Unlike traditional cameras, event cameras (neuromorphic cameras) capture asynchronous brightness changes at the pixel level. These cameras exhibit remarkable attributes, including high dynamic range, low latency, and resistance to motion blur, making them well-suited for high dynamic range scenes and high-speed motion. These features make event cameras an ideal complement to standard optical cameras for pose estimation. This work proposes a data fusion approach that integrates monocular images and event streams to estimate the pose of non-cooperative targets. An end-to-end architecture is designed, combining Convolutional Neural Networks and Transformers to enable the extraction of detailed local features and global contextual information. The self-attention mechanism within the Transformer facilitates the alignment of cross-modal features. The fusion framework effectively leverages the complementary properties of multi-modal sensor acquisition to improve model performance in challenging space environments. To support this research, the event-monocular-spacecraft dataset is generated as the first publicly available synthetic event-monocular dataset, containing RGB images under varied lighting conditions, corresponding event streams, and precise pose labels. The evaluation results on the generated dataset demonstrate that the proposed fusion approach achieves an 87% high-precision estimation rate, representing a 5.4% improvement over the event-only model and a 9.5% improvement over the monocular-only model. To demonstrate the robustness and effectiveness of the proposed method, this study evaluated it on another publicly available real-world dataset and compared it with other state-of-the-art pose estimation methods. The results show that the proposed method achieves an average translation error of 0.0535 m and an angular error of 3.082\u00b0. In comparison, the average translation error of another method is 0.151 m and the average angular error is 2.363\u00b0. Extensive experiments demonstrate that the proposed cross-modal fusion method significantly outperforms approaches using a single sensor, achieving superior pose estimation accuracy and maintaining robust performance under extreme lighting conditions.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-05T15:02:18.103582"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.sciencedirect.com/science/article/pii/S1270963825004092#se0120"
        }
    ],
    "full_name": "Event-Monocular-Spacecraft (E-M-S) dataset",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1016/j.ast.2025.110055",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s40295-024-00461-8",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2020.106133",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2023.108484",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2023.108832",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s22228723",
            "source": "crossref"
        },
        {
            "doi": "10.3390/aerospace9030135",
            "source": "crossref"
        },
        {
            "doi": "10.3390/a13010023",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app12062810",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s22176362",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.paerosci.2017.07.001",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2019.105657",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2021.107232",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.robot.2019.03.010",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAES.2022.3161605",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2023.108453",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2018.11.042",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MAES.2024.3467028",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.actaastro.2016.06.018",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.actaastro.2015.12.034",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s40295-022-00344-w",
            "source": "crossref"
        },
        {
            "doi": "10.3390/aerospace7090126",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAES.2020.2989063",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.actaastro.2023.01.002",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.actaastro.2022.04.002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVT.2021.3139006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ast.2021.107185",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.actaastro.2021.01.050",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAES.2020.2999148",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2577031",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.asr.2023.03.036",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2023.3334492",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAES.2023.3332075",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3187266",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3060707",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cag.2021.04.018",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s21237840",
            "source": "crossref"
        },
        {
            "title": "Predicting uncertainty in vision-based satellite pose estimation using deep evidential regression",
            "source": "crossref"
        },
        {
            "title": "High precision pose estimation for uncooperative targets based on monocular vision and 1d laser fusion",
            "source": "crossref"
        },
        {
            "title": "Constrained Kalman filter for uncooperative spacecraft estimation by stereovision",
            "source": "crossref"
        },
        {
            "title": "Hybrid iteration and optimization-based three-dimensional reconstruction for space non-cooperative targets with monocular vision and sparse lidar fusion",
            "source": "crossref"
        },
        {
            "title": "Adaptive hybrid Kalman filter for attitude motion parameters estimation of space non-cooperative tumbling target",
            "source": "crossref"
        },
        {
            "title": "Microsatellite uncertainty control using deterministic artificial intelligence",
            "source": "crossref"
        },
        {
            "title": "Autonomous trajectory generation algorithms for spacecraft slew maneuvers",
            "source": "crossref"
        },
        {
            "title": "Optimal learning and self-awareness versus pdi",
            "source": "crossref"
        },
        {
            "title": "Controlling remotely operated vehicles with deterministic artificial intelligence",
            "source": "crossref"
        },
        {
            "title": "Comparison of deep learning and deterministic algorithms for control modeling",
            "source": "crossref"
        },
        {
            "title": "A review of cooperative and uncooperative spacecraft pose determination techniques for close-proximity operations",
            "source": "crossref"
        },
        {
            "title": "Reinforcement learning in dual-arm trajectory planning for a free-floating space robot",
            "source": "crossref"
        },
        {
            "title": "Image-based attitude determination of co-orbiting satellites using deep learning technologies",
            "source": "crossref"
        },
        {
            "title": "A fusion method of 1d laser and vision based on depth estimation for pose estimation and reconstruction",
            "source": "crossref"
        },
        {
            "title": "Revisiting monocular satellite pose estimation with transformer",
            "source": "crossref"
        },
        {
            "title": "Shadow removal of spacecraft images with multi-illumination angles image fusion",
            "source": "crossref"
        },
        {
            "title": "Autonomous relative navigation around uncooperative spacecraft based on a single camera",
            "source": "crossref"
        },
        {
            "title": "A factor-ignored module for easy detection of uncooperative spacecraft using small training samples",
            "source": "crossref"
        },
        {
            "title": "Removedebris: an in-orbit active debris removal demonstration mission",
            "source": "crossref"
        },
        {
            "title": "Design challenges and safety concept for the avanti experiment",
            "source": "crossref"
        },
        {
            "title": "Pose terrier\u2013image-based pose estimation and filtering for spacecraft applications",
            "source": "crossref"
        },
        {
            "title": "Accurate pose tracking for uncooperative targets via data fusion of laser scanner and optical camera",
            "source": "crossref"
        },
        {
            "title": "Vision-based spacecraft pose estimation via a deep convolutional neural network for noncooperative docking operations",
            "source": "crossref"
        },
        {
            "title": "Deep learning-based relative navigation about uncooperative space objects",
            "source": "crossref"
        },
        {
            "title": "Monocular relative pose estimation pipeline for uncooperative resident space objects",
            "source": "crossref"
        },
        {
            "title": "Satellite pose estimation challenge: dataset, competition design, and results",
            "source": "crossref"
        },
        {
            "title": "Satellite pose estimation competition 2021: results and analyses",
            "source": "crossref"
        },
        {
            "title": "On-ground validation of a cnn-based monocular pose estimation system for uncooperative spacecraft: bridging domain shift in rendezvous scenarios",
            "source": "crossref"
        },
        {
            "title": "A multi-sensor fusion positioning strategy for intelligent vehicles using global pose graph optimization",
            "source": "crossref"
        },
        {
            "title": "Densefusion: 6d object pose estimation by iterative dense fusion",
            "source": "crossref"
        },
        {
            "title": "Event-based moving object detection and tracking",
            "source": "crossref"
        },
        {
            "title": "Learning monocular dense depth from events",
            "source": "crossref"
        },
        {
            "title": "Real-time 6dof pose relocalization for event cameras with stacked spatial lstm networks",
            "source": "crossref"
        },
        {
            "title": "Line-based 6-dof object pose estimation and tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: a survey",
            "source": "crossref"
        },
        {
            "title": "Event-stream representation for human gaits identification using deep neural networks",
            "source": "crossref"
        },
        {
            "title": "Pld-vins: rgbd visual-inertial slam with point and line features",
            "source": "crossref"
        },
        {
            "title": "A low-dimensional binary-based descriptor for unknown satellite relative pose estimation",
            "source": "crossref"
        },
        {
            "title": "Bridging the domain gap in satellite pose estimation: a self-training approach based on geometrical constraints",
            "source": "crossref"
        },
        {
            "title": "Neural network-based pose estimation for noncooperative spacecraft rendezvous",
            "source": "crossref"
        },
        {
            "title": "Faster R-cnn: towards real-time object detection with region proposal networks",
            "source": "crossref"
        },
        {
            "title": "Robust multi-task learning and online refinement for spacecraft pose estimation across domain gap",
            "source": "crossref"
        },
        {
            "title": "Satellite pose estimation with deep landmark regression and nonlinear pose refinement",
            "source": "crossref"
        },
        {
            "title": "Attention is all you need",
            "source": "crossref"
        },
        {
            "title": "Language models are few-shot learners",
            "source": "crossref"
        },
        {
            "title": "Rockformer: a u-shaped transformer network for martian rock segmentation",
            "source": "crossref"
        },
        {
            "title": "Gdr-net: geometry-guided direct regression network for monocular 6d object pose estimation",
            "source": "crossref"
        },
        {
            "title": "End-to-end object detection with transformers",
            "source": "crossref"
        },
        {
            "title": "Dtse-spacenet: deformable-transformer-based single-stage end-to-end network for 6-d pose estimation in space",
            "source": "crossref"
        },
        {
            "title": "Recurrent vision transformers for object detection with event cameras",
            "source": "crossref"
        },
        {
            "title": "Emvs: event-based multi-view stereo\u20143d reconstruction with an event camera in real-time",
            "source": "crossref"
        },
        {
            "title": "Event-based line slam in real-time",
            "source": "crossref"
        },
        {
            "title": "Research on event accumulator settings for event-based slam",
            "source": "crossref"
        },
        {
            "title": "Event-based, 6-dof pose tracking for high-speed maneuvers",
            "source": "crossref"
        },
        {
            "title": "Fully convolutional neural network for event camera pose estimation",
            "source": "crossref"
        },
        {
            "title": "Spades: a realistic spacecraft pose estimation dataset using event sensing",
            "source": "crossref"
        },
        {
            "title": "Towards bridging the space domain gap for satellite pose estimation using event sensing",
            "source": "crossref"
        },
        {
            "title": "Speed+: next-generation dataset for spacecraft pose estimation across domain gap",
            "source": "crossref"
        },
        {
            "title": "Fusing event-based and rgb camera for robust object detection in adverse conditions",
            "source": "crossref"
        },
        {
            "title": "A 240 \u00d7 180 130 db 3 \u03bcs latency global shutter spatiotemporal vision sensor",
            "source": "crossref"
        },
        {
            "title": "Ultimate slam? Combining events, images, and imu for robust visual slam in hdr and high-speed scenarios",
            "source": "crossref"
        },
        {
            "title": "Combining events and frames using recurrent asynchronous multimodal networks for monocular depth prediction",
            "source": "crossref"
        },
        {
            "title": "Secrets of event-based optical flow",
            "source": "crossref"
        },
        {
            "title": "V2e: from video frames to realistic dvs events",
            "source": "crossref"
        },
        {
            "title": "Deep residual learning for image recognition",
            "source": "crossref"
        },
        {
            "title": "Imagenet: a large-scale hierarchical image database",
            "source": "crossref"
        },
        {
            "title": "Dpod: 6d pose object detector and refiner",
            "source": "crossref"
        },
        {
            "title": "Wide-depth-range 6d object pose estimation in space",
            "source": "crossref"
        },
        {
            "title": "Posecnn: a convolutional neural network for 6d object pose estimation in cluttered scenes",
            "source": "crossref"
        },
        {
            "title": "Feature pyramid networks for object detection",
            "source": "crossref"
        },
        {
            "title": "Deep high-resolution representation learning for human pose estimation",
            "source": "crossref"
        },
        {
            "title": "Transpose: keypoint localization via transformer",
            "source": "crossref"
        },
        {
            "title": "Cma: cross-modal attention for 6d object pose estimation",
            "source": "crossref"
        },
        {
            "title": "Espee: event-based sensor pose estimation using an extended Kalman filter",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "110338",
        "month": "aug",
        "year": 2025,
        "author": "Yishi, Wang and Maestrini, Michele and Zexu, Zhang and Massari, Mauro and Di Lizia, Pierluigi",
        "publisher": "Elsevier BV",
        "journal": "Aerospace Science and Technology",
        "doi": "10.1016/j.ast.2025.110338",
        "url": "http://dx.doi.org/10.1016/j.ast.2025.110338",
        "issn": "1270-9638",
        "volume": "163",
        "title": "Cross-modal fusion of monocular images and neuromorphic streams for 6D pose estimation of non-cooperative targets",
        "type": "article",
        "key": "Yishi_2025"
    }
}
---

# Dataset Description

This dataset contains a total of 57200 event.csv  (57,200 event frames), corresponding 57,200 RGB images, 572  RGB videos and ground truth 6D pose labels. The image resolution is 640×480, including different lighting conditions such as normal and low light. The images in the RGB/img folder have the same pose label as the corresponding numbered csv event stream in the Even/event_stream folder. The data format is as follows: 


E-M-S.zip
   --training
      --RGB
         --img{*.jpg}
         --pose {*.txt: Pose format <r1, r2, r3, r4, r5, r6, r7, r8, r9, tx, ty, tz>, the first 9 values represent the rotation matrix, and the last three values represent the translation vector} 
      --Event
         --event_stream{*.csv, event stream with the format<timestamp,x,y,polarity>}
         --pose {*.txt: Pose format <r1, r2, r3, r4, r5, r6, r7, r8, r9, tx, ty, tz>, the first 9 values represent the rotation matrix, and the last three values represent the translation vector}

   --validation (Same data structure as training) 
      --RGB
      --Event

   --testing (Same data structure as training) 
      --RGB
      --Event