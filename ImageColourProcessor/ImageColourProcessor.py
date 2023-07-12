
if __name__ == '__main__':
    from PIL import Image
    import glob, os

    #codes are based on html colour list
    colour_rgb_list = [(255, 255, 0),(0, 0, 255),(255, 0, 0),(0, 128, 0),(255,255,255),(0,0,0), (255, 165, 0), (135, 206, 235), (0, 0, 128), (128, 0, 0)]
    colour_dict = {(255, 255, 0): 'Yellow', (0, 0, 255):"Blue" ,(255, 0, 0):"Red",(0, 128, 0):"Green",(255,255,255):"White",(0,0,0):"Black",(255, 165, 0):"Orange",(135, 206, 235):"Sky Blue",(0, 0, 128):"Navy", (128, 0, 0):"Maroon"}
    country_dict = {}

    #open all
    flag_info = {}
    flag_colour_info = {}
    for infile in glob.glob("*.png"):
        file, ext = os.path.splitext(infile)
        with Image.open(infile) as im:
            imrgb = im.convert('RGB')
            colour_list = imrgb.getcolors()
            num_pixels = imrgb.size[0] * imrgb.size[1]
            final_list = []
            name_list = []
            for i in range(len(colour_list)):
                #threshold for colour inclusion needs adjusting
                if colour_list[i][0] > (num_pixels/20):
                    final_list.append(colour_list[i])
                    print(colour_list[i])
                    closest_colour = min(colour_rgb_list, key=lambda c: (c[0]-colour_list[i][1][0])**2 + (c[1]-colour_list[i][1][1])**2 + (c[2]-colour_list[i][1][2])**2)
                    name_list.append(colour_dict[closest_colour])
                    print(colour_dict[closest_colour])
            flag_info[file] = final_list
            country_dict[file] = name_list
    print(flag_info)
    print(country_dict)


    
    
